import { cva, VariantProps } from 'class-variance-authority';

const buttonClasses = cva(
  [
    'drop-shadow',
    'hover:bg-opacity-80',
    'rounded-lg',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-primary', 'text-black'],
        secondary: ['bg-secondary', 'text-black'],
        text: ['bg-transparent', 'text-white', 'hover:bg-accent'],
      },
      size: {
        small: ['px-3.5', ' py-2', 'text-sm', 'font-semibold'],
        medium: ['p-2.5', 'text-base', 'font-bold'],
        large: ['px-7', ' py-4', 'font-bold', 'text-xl'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  children,
  className,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};
export default Button;
