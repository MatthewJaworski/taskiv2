'use client'; // Error components must be Client Components

import Button from '@/components/common/Button/Button';
import Container from '@/components/common/Container/Container';
import { useRouter } from 'next/navigation';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };
  return (
    <Container className="flex justify-center flex-col items-center">
      <h2 className="text-5xl font-semibold text-center">
        Something went wrong!
      </h2>
      <Button intent="secondary" className="mt-4" onClick={clickHandler}>
        Go back
      </Button>
    </Container>
  );
}
