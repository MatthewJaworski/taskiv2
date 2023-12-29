import { VariantProps, cva } from 'class-variance-authority';

const containerClass = cva(
  ['mx-auto', 'container', 'rounded-xl', 'p-4', 'drop-shadow-xl'],
  {
    variants: {
      intent: {
        primary: ['bg-primary/10'],
        secondary: ['bg-secondary', 'text-black'],
        alert: ['bg-accent', 'text-white'],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);
export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerClass> {}

const Container: React.FC<ContainerProps> = ({
  children,
  intent,
  className,
  ...props
}) => {
  return (
    <div {...props} className={containerClass({ intent, className })}>
      {children}
    </div>
  );
};
export default Container;
