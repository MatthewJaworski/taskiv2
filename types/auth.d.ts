export type TRegisterUserDto = {
  email: string;
  username: string;
  fullName: string;
  password: string;
  confirmPassword: string;
};
export type TLoginDto = {
  email: string;
  password: string;
};
export type TLoginKeys = keyof TLoginDto;

export type TTokenUser = {
  id: string;
  email: string;
  username: string;
  fullName: string;
}