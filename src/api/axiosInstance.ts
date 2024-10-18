import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosHeaders,
} from "axios";

import { clearAuth, setAccessToken } from "@/redux/features/authSlice";
import { RootState, store } from "@/redux/store";

// Axios instance setup
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend URL
});

// Request Interceptor: Attach access token to each request
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const state: RootState = store.getState();
    const accessToken = state.auth.accessToken;

    if (accessToken) {
      // Using set method to add the Authorization header
      const headers = config.headers as AxiosHeaders;
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response Interceptor: Handle token expiration and retry failed requests
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post<{ accessToken: string }>(
          "http://localhost:3000/refresh-token",
          {},
          { withCredentials: true }
        );
        const newAccessToken = res.data.accessToken;

        store.dispatch(setAccessToken(newAccessToken));

        // Update the original request's Authorization header
        const headers = originalRequest.headers as AxiosHeaders;
        headers.set("Authorization", `Bearer ${newAccessToken}`);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        store.dispatch(clearAuth());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
