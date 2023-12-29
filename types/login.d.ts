import { TFieldObject } from "./utility";

export type TLoginFields=
  | "Email"
  | "Password"
  | "General";
  
export type TLoginFieldObject = TFieldObject<TRegisterFields>;