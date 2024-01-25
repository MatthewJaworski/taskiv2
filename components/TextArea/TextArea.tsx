import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const textAreaClasses = cva(
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
    },
    defaultVariants: {
      error: false,
    },
  }
);

const wrapperClasses = cva(['flex', 'justify-start', 'w-full', 'scrollbar'], {
  variants: {
    error: {
      true: ['bg-accent', 'hover:bg-accent/70'],
      false: ['bg-primary', 'hover:bg-primary/70'],
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

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaClasses>,
    VariantProps<typeof wrapperClasses> {
  error?: boolean;
  errorMessage?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { name, className, id, labelPosition, error, errorMessage, ...props },
    ref
  ) => {
    return (
      <div className={wrapperClasses({ labelPosition })}>
        <label className="text-sm m-1 font-semibold" htmlFor={id}>
          {name}
        </label>
        <textarea
          name={id}
          className={textAreaClasses({ className, error })}
          id={id}
          ref={ref}
          {...props}
        />
        {error && <p className="text-secondary">{errorMessage}</p>}
      </div>
    );
  }
);

export default TextArea;
