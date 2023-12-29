export type TKeyName<T> = { key: keyof T; name: T[keyof T] };


export type TFieldObject = {
  [K in TRegisterFields]: string;
};
