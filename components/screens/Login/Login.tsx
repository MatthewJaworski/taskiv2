'use client';
import useLogin from '@/hooks/useLogin';
import Link from 'next/link';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import Input from '../../common/Input/Input';

const Login = () => {
  const [handleSubmit, error] = useLogin();
  return (
    <Container>
      <h1 className="text-5xl font-semibold max-w-lg">Login</h1>
      <form className="w-full mt-12" onSubmit={handleSubmit}>
        <Input
          error={error.Email.error}
          required
          id="email"
          name="Email"
          title="Email"
          type="text"
          placeholder="Enter your email"
          errorMessage={error.Email.message}
        />
        <Input
          error={error.Password.error}
          required
          id="password"
          name="Password"
          title="Password"
          type="password"
          placeholder="Enter your password"
          errorMessage={error.Password.message}
        />
        {error.General.error && (
          <p className="mt-4 text-xl text-secondary">{error.General.message}</p>
        )}
        <Button type="submit" intent="secondary" className="w-full mt-7">
          Log in
        </Button>
      </form>
      <Button className="w-full mt-4" size="small">
        <Link href="/sign-up">
          <p>No account? Register</p>
        </Link>
      </Button>
    </Container>
  );
};

export default Login;
