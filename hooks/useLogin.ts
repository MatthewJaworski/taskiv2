import { loginUser } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useFormError } from './useFormError';

import { TLoginDto } from '@/types/auth';
import { TLoginFieldObject, TLoginFields, TLoginReponse } from '@/types/login';
import { TResponse } from '@/types/response';
import { TErrors } from '@/types/utility';
export const useLogin = () => {
  const loginInputFields: TLoginFieldObject = {
    Email: '',
    Password: '',
    General: '',
  };
  const [errorState, errorDispatch] =
    useFormError<TLoginFieldObject>(loginInputFields);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const field in errorState) {
      errorDispatch({
        type: field as TLoginFields,
        payload: { error: false, message: '' },
      });
    }
    const formData = new FormData(e.currentTarget);
    const requestBody: TLoginDto = { email: '', password: '' };

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        requestBody[key as keyof TLoginDto] = value;
      }
    });

    const response = await loginUser(requestBody) as TLoginReponse & TErrors;

    if (response.errors) {
      for (const field in response.errors) {
        errorDispatch({
          type: field as TLoginFields,
          payload: { error: true, message: response.errors[field].join('\n') },
        });
      }
    }
    if (response.success || response.accessToken) {
      router.push('/home');
    }
  };
  return [handleSubmit, errorState, errorDispatch] as const;
};


export default useLogin;
