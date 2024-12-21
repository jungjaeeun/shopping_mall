import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

interface FilterProps {
  filterOptions: string[];
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  style?: React.CSSProperties;
}

const FilterWrap = styled.div`
  padding: 12px 0;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  display: flex;
  gap: 4px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FilterItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  font-size: 12px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;

  ${({ isSelected }) => `
    border: ${isSelected ? "transparent" : `1px solid ${theme.colors.border}`};
    background-color: ${isSelected ? theme.colors.primary : "transparent"};
    color: ${isSelected ? theme.colors.secondary : theme.colors.textPrimary};
    &:hover {
      background-color: ${
        isSelected ? theme.colors.primary : theme.colors.accent
      };
      color: ${
        isSelected ? theme.colors.secondary : theme.colors.textSecondary
      };
    }
  `}
`;

const Filter: React.FC<FilterProps> = ({
  filterOptions,
  selectedFilter,
  onSelectFilter,
  style = {},
}) => {
  return (
    <FilterWrap style={style}>
      <FilterList>
        {filterOptions.map((filterOption) => (
          <FilterItem
            key={filterOption}
            isSelected={selectedFilter === filterOption}
            onClick={() => onSelectFilter(filterOption)}
          >
            {filterOption}
          </FilterItem>
        ))}
      </FilterList>
    </FilterWrap>
  );
};

export default React.memo(Filter);
