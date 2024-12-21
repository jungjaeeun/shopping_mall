import { useState, useCallback } from "react";

type UseSelectReturn = [string, (value: string) => void];

const useSelect = (
  initialList: string[],
  initialValue: string
): UseSelectReturn => {
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

export default useSelect;
