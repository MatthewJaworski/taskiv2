import { registerUser } from '@/lib/api';
import { TRegisterUserDto } from '@/types/auth';
import { TRegisterFieldObject, TRegisterFields } from '@/types/register';
import { useRouter } from 'next/navigation';
import { useFormError } from './useFormError';
import { TResponse } from '@/types/response';
import { TErrors } from '@/types/utility';

export const useRegister = () => {
  const registerInputFields: TRegisterFieldObject = {
    Email: '',
    Password: '',
    Username: '',
    FullName: '',
    ConfirmPassword: '',
    General: '',
  };
  const [errorState, errorDispatch] =
    useFormError<TRegisterFieldObject>(registerInputFields);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const field in errorState) {
      errorDispatch({
        type: field as TRegisterFields,
        payload: { error: false, message: '' },
      });
    }
    const formData = new FormData(e.currentTarget);
    const requestBody: TRegisterUserDto = {
      confirmPassword: '',
      email: '',
      fullName: '',
      password: '',
      username: '',
    };
    formData.forEach((value, key) => {
      requestBody[key as keyof TRegisterUserDto] = value as string;
    });
    const response = await registerUser(requestBody) as TResponse & TErrors;
    if (response.errors) {
      for (const field in response.errors) {
        errorDispatch({
          type: field as TRegisterFields,
          payload: { error: true, message: response.errors[field].join('\n') },
        });
      }
    }
    if (response.success) {
      router.push('/home');
    }
  };
  return [handleSubmit, errorState, errorDispatch] as const;
};
