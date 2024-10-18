import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";
import {
  TLoginRequestBody,
  TLoginResponse,
  TLogoutResponse,
  TProfileResponse,
} from "@/config/authTypes";

export const login = async (
  requestBody: TLoginRequestBody
): Promise<TLoginResponse> => {
  const { data }: AxiosResponse<TLoginResponse> = await axiosInstance.post(
    "/login",
    requestBody,
    {
      withCredentials: true,
    }
  );
  return data;
};

export const logout = async (): Promise<TLogoutResponse> => {
  const { data }: AxiosResponse<TLogoutResponse> = await axiosInstance.post(
    "/logout",
    {},
    {
      withCredentials: true,
    }
  );
  return data;
};

export const getProfile = async (): Promise<TProfileResponse> => {
  const { data }: AxiosResponse<TProfileResponse> = await axiosInstance.get(
    "/profile"
  );
  return data;
};
