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

export const highlightText = (text: string, keyword: string) => {
  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: "pink" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

export default useInput;
