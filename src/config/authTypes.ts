export type TLoginRequestBody = {
  username: string;
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
};

export type TLogoutResponse = {
  message: string;
};

export type TProfileResponse = {
  message: string;
  user: {
    id: number;
    username: string;
    password: string;
  };
};
