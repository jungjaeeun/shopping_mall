import { useCallback, useState } from "react";

type UseInputReturn = [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput = (initialValue: string): UseInputReturn => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  return [inputValue, handleChange];
};

export default useInput;
