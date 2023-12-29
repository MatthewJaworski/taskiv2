import Button from '@/components/Button/Button';
import { text } from '@/constants/en';
import { getUserIdFromCookie } from '@/lib/auth';
import Link from 'next/link';

const Home = async () => {
  const userId = await getUserIdFromCookie();

  const href = userId ? '/home' : '/sign-in';
  const {
    welcomePage: { description, infoButton, loginButton, title },
  } = text;

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
        <div className="flex gap-2 justify-center mt-5">
          <Link href={href}>
            <Button size="large">{loginButton}</Button>
          </Link>

          <Link href="/info">
            <Button size="large" intent="secondary">
              {infoButton}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
