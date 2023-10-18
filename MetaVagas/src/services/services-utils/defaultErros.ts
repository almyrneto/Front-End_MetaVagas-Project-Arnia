import { isAxiosError } from "axios";

export const defaultErros = (error: unknown) => {
  if (isAxiosError(error)) {
    switch (error.status) {
      case 401:
        throw new Error("Usuário não está logado ou possui um token válido");
      default:
        throw new Error("Ocorreu um erro em nossos servidores");
    }
  }
};
