'use client';
import { useRegister } from '@/hooks/useRegister';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import Input from '../../common/Input/Input';

const Register = () => {
  const [handleSubmit, errorState] = useRegister();

  return (
    <Container className="max-w-lg">
      <h1 className="text-5xl font-semibold max-w-lg">
        Organize your work with us!
      </h1>
      <form className="w-full mt-12" onSubmit={handleSubmit}>
        <Input
          required
          id="email"
          name="Email"
          title="Email"
          type="text"
          placeholder="Email"
          errorMessage={errorState.Email.message}
          error={errorState.Email.error || errorState.General.error}
        />
        <Input
          id="username"
          name="Username"
          title="Username"
          type="text"
          placeholder="Username"
          errorMessage={errorState.Username.message}
          error={errorState.Username.error || errorState.General.error}
        />
        <Input
          id="fullName"
          name="Full Name"
          title="Full Name"
          type="text"
          placeholder="Full Name"
          errorMessage={errorState.FullName.message}
          error={errorState.FullName.error || errorState.General.error}
        />
        <Input
          required
          id="password"
          name="Password"
          title="Password"
          type="password"
          placeholder="Password"
          errorMessage={errorState.Password.message}
          error={errorState.Password.error || errorState.General.error}
        />
        <Input
          required
          id="confirmPassword"
          name="Confirm Password"
          title="ConfirmPassowrd"
          type="password"
          placeholder="Confirm Password"
          errorMessage={errorState.ConfirmPassword.message}
          error={errorState.ConfirmPassword.error || errorState.General.error}
        />
        <Button type="submit" intent="secondary" className="w-full mt-7">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
