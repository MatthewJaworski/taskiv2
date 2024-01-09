'use client';
import Search, { OptionType } from '../Search/Search';

interface searhUserInterface {
  defaultValue?: OptionType;
  name: string;
  id: string;
  promiseOptions: (inputValue: string) => Promise<OptionType[]>;
  onChange?: ((option: OptionType | null) => void) | undefined;
  error?: boolean;
  errorMessage?: string;
}
const SearchUser = ({
  defaultValue,
  name,
  id,
  promiseOptions,
  onChange,
  error,
  errorMessage,
}: searhUserInterface) => {
  return (
    <div>
      <Search
        id={id}
        defaultValue={defaultValue}
        name={name}
        promiseOptions={promiseOptions}
        onChange={onChange}
      />
      {error && <p className="text-secondary">{errorMessage}</p>}
    </div>
  );
};

export default SearchUser;
