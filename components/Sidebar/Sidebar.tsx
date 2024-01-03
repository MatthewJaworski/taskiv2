'use client';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Book,
  Globe,
  Plus,
  Settings,
} from 'react-feather';
import SidebarLink from './SidebarLink';
export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const classes = isOpen
    ? ' max-w-[300px] justify-between bg-black/20  px-6 py-10'
    : 'max-w-[0px]  justify-center items-center';
  const sidebarLinks = [
    { icon: Globe, text: 'Overview', href: '/overview' },
    { icon: Book, text: 'Tasks', href: '/tasks' },
    { icon: Bell, text: 'Notifications', href: '/notifications' },
    { icon: Settings, text: 'Settings', href: '/settings' },
  ];
  return (
    <div
      className={`text-white flex max-w-[300pxpx]  flex-col duration-200   h-screen ease-out ${classes}`}
    >
      {isOpen ? (
        <>
          <div>
            <h1 className="text-primary text-2xl font-bold mb-10">Taski</h1>
            <SidebarLink Icon={Plus} text="New Project" href="/new-project" />
            <p className="mt-10 font-bold">Menu</p>
            <ul className="flex justify-center items-center flex-col gap-5">
              {sidebarLinks.map(({ icon: Icon, text, href }, i) => (
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
            <p className="mt-10 mb-3 font-bold">Profile</p>
            {/* <UserButton
              appearance={{
                elements: {
                  userButtonOuterIdentifier: 'text-white font-bold',
                  userButtonBox: 'flex flex-row-reverse',
                },
              }}
              showName={true}
            /> */}
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
