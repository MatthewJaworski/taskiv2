import Container from '@/components/common/Container/Container';
import { OptionType } from '@/components/common/Search/Search';
import Users from '@/components/screens/Users/Users';
import { getAllUsers } from '@/lib/api';
import { getJWTFromCookie } from '@/lib/auth';

const Page = async () => {
  const token = await getJWTFromCookie();

  const users = (await getAllUsers(token as string)) as OptionType[];

  return (
    <Container>
      <h1 className="text-5xl font-semibold max-w-lg mb-4">All Users</h1>
      <Users users={users} />
    </Container>
  );
};

export default Page;
