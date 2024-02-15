import { theme } from './../../../constants/theme';
import { LoaderProps } from './Loader';

const base: LoaderProps = {
  wrapperClass: '',
  height: 100,
  width: 100,
  color: theme.colors.primary,
};

export const mockLoaderProps = {
  base,
};
