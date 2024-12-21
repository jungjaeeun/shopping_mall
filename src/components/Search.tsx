import React, { ChangeEvent, FocusEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const FilterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.border};
  outline: none;
  width: 100%;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #4a90e2;
  }

  &:hover {
    border-color: #bbb;
  }
`;

const Search: React.FC<InputProps> = ({
  value,
  onChange,
  onBlur,
  placeholder = "",
  type = "text",
}) => {
  return (
    <FilterWrap>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </FilterWrap>
  );
};

export default React.memo(Search);
