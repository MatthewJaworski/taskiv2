import { loginUser } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useFormError } from './useFormError';

import { TLoginDto } from '@/types/auth';
import { TLoginFieldObject, TLoginFields } from '@/types/login';

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

    const response = await loginUser(requestBody);
    console.log(response, 'response');

    if (response.errors) {
      for (const field in response.errors) {
        errorDispatch({
          type: field as TLoginFields,
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

// const useLogin = (): [
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
//   boolean,
// ] => {
//   const [error, setError] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     setError(false);
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const requestBody: TLoginDto = { email: '', password: '' };

//     formData.forEach((value, key) => {
//       if (typeof value === 'string') {
//         requestBody[key as TLoginKeys] = value;
//       }
//     });

//     const response = await loginUser(requestBody);

//     if (response.error) {
//       setError(true);
//     }
//     if (response.success) {
//       router.push('/home');
//     }
//   };

//   return [handleSubmit, error];
// };

export default useLogin;
