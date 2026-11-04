import config from "@/config";
import { LoginFormInput, RegisterFormInput } from "@/types/auth";
import axios from "axios";

const login = async (data: LoginFormInput) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);

  return response;
};

const registerUser = async (data: RegisterFormInput) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);

  return response;
};

export { login, registerUser };
