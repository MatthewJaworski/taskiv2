import { TFieldObject } from './utility';

export type TRegisterFields =
  | 'Email'
  | 'Password'
  | 'Username'
  | 'FullName'
  | 'ConfirmPassword'
  | 'General';

export type TRegisterFieldObject = TFieldObject<TRegisterFields>;
