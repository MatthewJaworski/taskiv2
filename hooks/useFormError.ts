import { TErrorAction, TErrorState } from '@/types/formError';

import { useReducer } from 'react';

export const useFormError = <T>(fields:T) => {
  function errorReducer(
    state: TErrorState<T>,
    action: TErrorAction<T>
  ): TErrorState<T> {
    return { ...state, [action.type]: action.payload };
  }

  const initialState: TErrorState<T> = {} as TErrorState<T>;

  for (const key in fields) {
    initialState[key] = { error: false, message: '' };
  }
  const [errorState, errorDispatch] = useReducer(errorReducer, initialState);

  return [errorState, errorDispatch] as const;
};
