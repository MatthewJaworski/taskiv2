import { VariantProps, cva } from 'class-variance-authority';

const containerClass = cva(['container', "shadow-sm", 'rounded-xl'], {
  variants: {
    intent: {
      primary: ['bg-primary/10'],
      secondary: ['bg-secondary', 'text-black'],
      alert: ['bg-accent', 'text-white'],
    },
    size: {
      small: ['p-1'],
      medium: ['p-4', 'mx-auto'],
      large: ['p-6', 'mx-auto'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});
export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerClass> {}

const Container: React.FC<ContainerProps> = ({
  children,
  intent,
  className,
  size,
  ...props
}) => {
  return (
    <div {...props} className={containerClass({ intent, size, className })}>
      {children}
    </div>
  );
};
export default Container;
