import { AxiosResponse, isAxiosError } from "axios";
import api from "./config";

type LoginApi = {
  token: string;
  name: string;
};

type LoginUserPayload = {
  email: string;
  password: string;
};

type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "advertiser" | "candidate";
  isActive?: boolean;
};

export const LoginService = async (payload: LoginUserPayload) => {
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(
      "/auth/login",
      payload
    );

    const { token } = userData.data;

    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = token;
    if (userData.status !== 200)
      return { success: true, token: token };
  } catch (error: any) {
    throw new Error('Usuário ou Senha incorretos')
    console.log(error)
  }
};

export const CreateUserService = async (payload: CreateUserPayload) => {
  try {
    const response: AxiosResponse<{ message: string }> = await api.post(
      "/auth/register",
      payload
    );

    return { success: true, message: response.data.message };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 400) {
        return { success: false, message: error.response?.data.message };
      }
    }
  }
};
