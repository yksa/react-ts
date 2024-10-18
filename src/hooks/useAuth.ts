import {
  getProfile,
  login as loginApi,
  logout as logoutApi,
} from "@/api/authApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { setAccessToken } from "@/redux/features/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  return useAppSelector((state) => state.auth);
};

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (result) => {
      const { accessToken } = result;
      dispatch(setAccessToken(accessToken));
      toast.success("Login successful");
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      console.log("useLogout mutation success");
      toast.success("Logout successful");
    },
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
};
