'use client';
import removeToken from '@/actions/removeToken';
import { TTokenUser } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Book,
  Globe,
  Home,
  Plus,
  User,
} from 'react-feather';
import Button from '../../common/Button/Button';
import SidebarLink from './SidebarLink';

export interface SidebarProps {
  user: TTokenUser;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const isAdmin = user.role === 'Admin';
  const isUser = user.role === 'User';
  const [isOpen, setIsOpen] = useState(false);
  const classes = isOpen
    ? ' max-w-[300px] justify-between bg-black/20  px-6 py-10'
    : 'max-w-[0px]  justify-center items-center';

  const userSidebarLinks = [
    { icon: Home, text: 'Home', href: '/home' },
    { icon: Book, text: 'Tasks', href: '/tasks' },
  ];
  const sidebarLinks = [{ icon: Globe, text: 'Overview', href: '/overview' }];
  const adminSidebarLinks = [{ icon: User, text: 'Users', href: '/users' }];
  const router = useRouter();
  const logoutHandler = async () => {
    router.push('/');
    await removeToken();
  };
  return (
    <div
      className={`text-white flex max-w-[300pxpx]  flex-col duration-200 h-screen ease-out ${classes}`}
    >
      {isOpen ? (
        <>
          <div>
            <h1 className="text-primary text-2xl font-bold mb-10">Taski</h1>
            {isUser && (
              <SidebarLink Icon={Plus} text="New Project" href="/new-project" />
            )}
            <p className="mt-10 font-bold">Menu</p>
            <ul className="flex justify-center items-center flex-col gap-5">
              {isUser &&
                userSidebarLinks.map(({ icon: Icon, text, href }, i) => (
                  <SidebarLink key={i} Icon={Icon} text={text} href={href} />
                ))}
              {sidebarLinks.map(({ icon: Icon, text, href }, i) => (
                <SidebarLink key={i} Icon={Icon} text={text} href={href} />
              ))}
              {isAdmin &&
                adminSidebarLinks.map(({ icon: Icon, text, href }, i) => (
                  <SidebarLink key={i} Icon={Icon} text={text} href={href} />
                ))}
            </ul>
            <div
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center mt-5"
            >
              <ArrowLeft className="cursor-pointer" size={30} />
            </div>
          </div>
          <div className="text-white">
            <Button
              className="w-full"
              intent="secondary"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </div>
        </>
      ) : (
        <ArrowRight
          className="ml-6 relative z-10 cursor-pointer"
          size={30}
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
  );
};
export default Sidebar;
