import { AxiosResponse } from "axios";
import api from "./config";
import { UpdateUser, User, Users } from "./services-utils/types";
import { defaultErros } from "./services-utils/defaultErros";

// Todos os usuários
export const getAllUsers = async (): Promise<Users> => {
  try {
    const response: AxiosResponse<Users> = await api.get("/users", {
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
    });

    return response.data;
  } catch (error) {
    defaultErros(error);
  }

  throw new Error("Ocorreu um erro em nossos servidores");
};

// Usuário pelo id
export const getOneUser = async (id: string): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.get("/users", {
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
      params: { id },
    });

    return response.data;
  } catch (error) {
    defaultErros(error);
  }

  throw new Error("Ocorreu um erro em nossos servidores");
};

// Usuário logado
export const ProfileUser = async (): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.get("/users/profile", {
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
    });

    return response.data;
  } catch (error) {
    defaultErros(error);
  }

  throw new Error("Ocorreu um erro em nossos servidores");
};

// Atualizar o usuário
export const updateUser = async (
  id: string,
  data: UpdateUser
): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.patch(`/users`, data, {
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
      params: { id },
    });

    return response.data;
  } catch (error) {
    defaultErros(error);
  }

  throw new Error("Ocorreu um erro em nossos servidores");
};

// Soft-delete de um usuário (isActive:false)
export const softDeleteUser = async (id: string): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.delete(
      `/users/${id}/soft-delete`,
      {
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      }
    );

    return response.data;
  } catch (error) {
    defaultErros(error);
  }

  throw new Error("Ocorreu um erro em nossos servidores");
};

// Restaurar um usuário do soft delete
export const restoreUser = async (id: string): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.post(
      `/users/${id}/restore`,
      {
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      }
    );

    return response.data;
  } catch (error) {
    defaultErros(error);
  }

  throw new Error("Ocorreu um erro em nossos servidores");
};
