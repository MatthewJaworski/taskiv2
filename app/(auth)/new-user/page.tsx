// import { createUser } from '@/lib/createUser';
// import { prisma } from '@/lib/databaseConnection';
// import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const CreateUserWhenNotMatch = async () => {
  // const user = await currentUser();
  // const match = await prisma.user.findUnique({
  //   where: {
  //     clerkId: user?.id,
  //   },
  // });
  // if (!match) {
  //   await createUser(
  //     user?.id as string,
  //     user?.emailAddresses[0].emailAddress as string
  //   );
  // }
  // redirect('/home');
};

const NewUserPage = async () => {
  await CreateUserWhenNotMatch();

  return (
    <section>
      <h1 className="text-white">Loading...</h1>
    </section>
  );
};

export default NewUserPage;
