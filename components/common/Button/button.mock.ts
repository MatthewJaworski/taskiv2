import { ButtonProps } from './Button';

const base: ButtonProps = {
  children: 'Primary',
  intent: 'primary',
  size: 'medium',
  className: '',
};

const alternateBase: ButtonProps = {
  children: 'Secondary',
  intent: 'secondary',
  size: 'small',
};

const textBase: ButtonProps = {
  children: 'Secondary',
  intent: 'text',
  size: 'large',
};

export const mockButtonProps = {
  base,
  alternateBase,
  textBase,
};
