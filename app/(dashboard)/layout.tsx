import Container from '@/components/Container/Container';
import Sidebar from '@/components/Sidebar/Sidebar';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex w-screen h-screen gap-2 bg-background text-white`}
      >
        <aside>
          <Sidebar />
        </aside>
        <main className="flex w-screen h-screen flex-wrap overflow-auto scrollbar">
          <Container className="my-4 flex ">{children}</Container>
        </main>
      </body>
    </html>
  );
}
