import React from "react";

interface FilterProps {
  filterOptions: string[];
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  filterOptions,
  selectedFilter,
  onSelectFilter,
}) => {
  return (
    <div className="filterWrap">
      <ul className="filterList">
        {filterOptions.map((filterOption, index) => (
          <li
            key={index}
            className={`filterItem ${
              selectedFilter === filterOption ? "selected" : ""
            }`}
            onClick={() => onSelectFilter(filterOption)}
          >
            {filterOption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
