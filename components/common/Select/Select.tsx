'use client';
import { VariantProps, cva } from 'class-variance-authority';
import React, { Ref } from 'react';
import Selektor, { StylesConfig } from 'react-select';

export interface OptionType {
  value: number | string | boolean;
  label: string;
}

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

export interface ISelectProps extends VariantProps<typeof wrapperClasses> {
  options?: OptionType[];
  defaultValue?: OptionType;
  onChange?: (option: OptionType | null) => void;
  variant?: 'primary' | 'secondary';
  name: string;
  id: string;
  ref?: Ref<any>;
}

const Select: React.FC<ISelectProps> = ({
  options,
  defaultValue,
  onChange,
  name,
  id,
  labelPosition,
  variant = 'primary',
  ref,
}) => {
  const customStyles: StylesConfig<OptionType, false> = {
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: variant === 'primary' ? '#8ACCBD' : '#EBCE51',
      color: 'black',
      border: 'none',
      borderRadius: '0.5rem',
      fontWeight: 600,
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: variant === 'primary' ? '#8ACCBD' : '#EBCE51',
        color: 'black',
        background: '#8ACCBD',
        fontWeight: 600,
      };
    },
    menuList: (styles) => {
      return {
        ...styles,
        backgroundColor: variant === 'primary' ? '#8ACCBD' : '#EBCE51',
        color: 'black',
        background: '#8ACCBD',
        borderBlockColor: 'black',
        borderRadius: '0.5rem',
      };
    },
    container: (styles, { isFocused }) => {
      return {
        ...styles,
        borderBlockColor: variant === 'primary' ? '#8ACCBD' : '#EBCE51',
        boxShadow: isFocused ? 'none' : styles.boxShadow,
        borderColor: isFocused ? 'transparent' : styles.borderColor,
      };
    },
    valueContainer: (styles) => {
      return { ...styles, padding: '0.5rem 1rem' };
    },
    indicatorsContainer: (styles) => {
      return { ...styles, color: 'black' };
    },
    placeholder: (styles) => {
      return { ...styles, color: 'black' };
    },
    dropdownIndicator: (styles) => {
      return { ...styles, color: 'black' };
    },
    indicatorSeparator: (styles) => {
      return { ...styles, backgroundColor: 'black' };
    },
    menu: (styles) => {
      return { ...styles, marginTop: '0px', background: 'none' };
    },
  };

  return (
    <div className={wrapperClasses({ labelPosition })}>
      <label className="text-sm m-1 font-semibold" htmlFor={id}>
        {name}
      </label>
      <Selektor
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        styles={customStyles}
        name={id}
        id={id}
        ref={ref}
      />
    </div>
  );
};

export default Select;
