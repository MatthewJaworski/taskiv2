import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const inputClasses = cva(
  [
    'relative',
    'cursor-pointer',
    'outline-none',
    'shadow-sm',
    'placeholder:text-black',
    'text-black',
    'px-4',
    'py-3',
    'rounded-lg',
    'duration-200',
    'ease-in-out',
    'font-semibold',
  ],
  {
    variants: {
      error: {
        true: ['bg-accent', 'hover:bg-accent/70'],
        false: ['bg-primary', 'hover:bg-primary/70'],
      },
      type: {
        password: ['text-black'],
        text: ['text-black'],
        checkbox: [
          'bg-transparent',
          'text-black',
          'checked:bg-secondary',
          'bg-primary',
          'checkbox',
        ],
      },
    },
    defaultVariants: {
      type: 'text',
    },
  }
);

const wrapperClasses = cva(['flex', 'justify-start', 'w-full'], {
  variants: {
    error: {
      true: [],
    },
    labelPosition: {
      top: ['flex-col'],
      left: ['flex-row', 'items-center', 'justify-center', 'gap-2'],
      right: ['flex-row-reverse', 'items-center', 'justify-end', 'gap-2'],
      bottom: ['flex-col-reverse'],
    },
  },
  defaultVariants: {
    labelPosition: 'top',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputClasses>,
    VariantProps<typeof wrapperClasses> {
  type: 'text' | 'checkbox' | 'password';
  error?: boolean;
  errorMessage?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name, type, className, id, labelPosition, error, errorMessage, ...props },
    ref
  ) => {
    return (
      <div className={wrapperClasses({ labelPosition, error })}>
        <label className="text-sm m-1 font-semibold" htmlFor={id}>
          {name}
        </label>
        <input
          name={id}
          className={inputClasses({ type, className, error })}
          type={type}
          id={id}
          ref={ref}
          {...props}
        />
        {error && <p className="text-secondary">{errorMessage}</p>}
      </div>
    );
  }
);
export default Input;
