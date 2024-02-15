import Container from '@/components/common/Container/Container';
import NewProject from '@/components/screens/NewProject/NewProject';
import { getJWTFromCookie, getUserIdFromCookie } from '@/lib/auth';

const Home = async () => {
  const token = await getJWTFromCookie()!;
  const userId = (await getUserIdFromCookie()) as string;

  return (
    <Container className="m-auto max-w-3xl p-8">
      <NewProject token={token} userId={userId} />
    </Container>
  );
};

export default Home;
