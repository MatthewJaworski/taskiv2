'use client';
import Container from '@/components/Container/Container';
import NewProject from '@/components/NewProject/NewProject';
const Home = () => {
  return (
    <Container className="m-auto max-w-3xl p-8">
      <NewProject />
    </Container>
  );
};

export default Home;
