export type LoginFormInput = {
  email: string;
  password: string;
};

export type RegisterFormInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  roles: string[];
};
