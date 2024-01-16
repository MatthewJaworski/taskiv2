import Container from '@/components/Container/Container';
import Sidebar from '@/components/Sidebar/Sidebar';
import { getUserDataFromCookie } from '@/lib/auth';
import '@/styles/globals.css';
import { TTokenUser } from '@/types/auth';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = (await getUserDataFromCookie()) as TTokenUser;
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex w-screen h-screen gap-2 bg-background text-white`}
      >
        <aside className="fixed bg-background z-10">
          <Sidebar user={userData} />
        </aside>
        <main className="flex w-screen h-screen flex-wrap overflow-auto scrollbar">
          <Container className="my-4 flex ">{children}</Container>
        </main>
      </body>
    </html>
  );
}
