import Link from 'next/link';
import { Icon } from 'react-feather';
import Button from '../Button/Button';

export interface SidebarLinkProps extends React.HTMLAttributes<HTMLLIElement> {
  Icon: Icon;
  text: string;
  href: string;
  iconSize?: number;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  Icon,
  text,
  iconSize,
  href,
  className,
  ...props
}) => {
  return (
    <li
      className={`list-none mt-3 w-full flex justify-center items-center overflow-hidden ${className} `}
      {...props}
    >
      <Link className="w-full" href={href}>
        <Button
          size="small"
          className="w-full flex justify-center items-center"
        >
          <Icon size={iconSize || 20} />
          <p className="text-nowrap">{text}</p>
        </Button>
      </Link>
    </li>
  );
};
export default SidebarLink;
