import React, { useMemo } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

// component
import { Filter, Input, ItemGrid, ItemList } from "../../components/index";
import Layout from "../../components/layout/Layout";

// hook/service/type
import { Item } from "../../type";
import { fetchListData } from "../../services/fetchData";
import useInput from "../../hooks/useInput";
import useSelect, { makeFieldList } from "../../hooks/useSelect";

const FilterWrap = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
`;

const ListPage: React.FC<{}> = () => {
  const {
    data = [] as Item[],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dataKey"],
    queryFn: fetchListData,
    staleTime: 5 * 60 * 1000,
  });
  const categories = makeFieldList<Item, "category">(data, "category");
  const modes = useMemo(() => ["grid", "list"], []);

  const [keyword, handleChangeKeyword] = useInput("");
  const [category, handleSelectCategory] = useSelect(categories, categories[0]);
  const [mode, handleSetMode] = useSelect(modes, modes[0]);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <Layout>
      <FilterWrap>
        <div className="searchWrap">
          <Input
            placeholder="Input your keyword"
            type="text"
            value={keyword}
            onChange={handleChangeKeyword}
          />
        </div>
        <div className="categoryWrap">
          <Filter
            selectedFilter={category}
            filterOptions={categories}
            onSelectFilter={handleSelectCategory}
          />
        </div>
        <ModeToggle mode={mode} setMode={handleSetMode} modeList={modes} />
      </FilterWrap>
      {mode === "grid" ? <ItemGrid data={data} /> : <ItemList data={data} />}
    </Layout>
  );
};

interface IModeToggleProps {
  modeList: string[];
  mode: string;
  setMode: (mode: string) => void;
}

const ModeToggle: React.FC<IModeToggleProps> = ({ modeList, setMode }) => {
  return (
    <div className="modeWrap">
      {modeList.map((item) => (
        <button key={item} onClick={() => setMode(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ListPage;
