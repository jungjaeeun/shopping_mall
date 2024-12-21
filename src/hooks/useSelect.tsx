import { useState, useCallback } from "react";

type UseSelectRetur = [string, (value: string) => void];

const useSelect = (
  initialList: string[],
  initialValue: string
): UseSelectRetur => {
  if (!initialList.includes(initialValue)) {
    throw new Error(
      "Initial value must be one of the items in the initial list."
    );
  }

  const [selectValue, setSelectValue] = useState(initialValue);

  const handleSelect = useCallback((value: string) => {
    setSelectValue(value);
  }, []);

  return [selectValue, handleSelect];
};

export const makeFieldList = <T, K extends keyof T>(
  data: T[],
  field: K
): string[] => {
  return [
    "all",
    ...Array.from(new Set(data.map((item) => String(item[field])))),
  ];
};

export default useSelect;
