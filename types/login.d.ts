import { TFieldObject } from './utility';

export type TLoginFields = 'Email' | 'Password' | 'General';

export type TLoginFieldObject = TFieldObject<TRegisterFields>;

export type TLoginReponse = {
  success: boolean;
  accessToken?: string;
  errors?: {
    [key: string]: string[];
  };
  userId:string,
  message?:string
};
