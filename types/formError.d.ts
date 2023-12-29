export type TErrorAction<T> = {
  type: keyof T;
  payload: { error: boolean; message: string };
};

export type TErrorState<T> = {
  [K in keyof T]: { error: boolean; message: string };
};
