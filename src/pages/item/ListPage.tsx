import React, { useMemo } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

// component
import { Filter, Search, ItemGrid, ItemList } from "../../components/index";
import Layout from "../../components/layout/Layout";

// hook/service/type
import { fetchListData } from "../../services/fetchData";
import useInput from "../../hooks/useInput";
import useSelect, { makeFieldList } from "../../hooks/useSelect";
import { Item } from "../../type";
import { theme } from "../../styles/theme";

const FilterWrap = styled.div`
  position: sticky;
  top: 0;
  background-color: ${theme.colors.secondary};
  padding: 12px 0;
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
        <Search
          placeholder="Input your keyword"
          type="text"
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <Filter
          selectedFilter={category}
          filterOptions={categories}
          onSelectFilter={handleSelectCategory}
        />
        <Filter
          style={{ padding: 0 }}
          selectedFilter={mode}
          filterOptions={modes}
          onSelectFilter={handleSetMode}
        />
      </FilterWrap>
      {mode === "grid" ? <ItemGrid data={data} /> : <ItemList data={data} />}
    </Layout>
  );
};

export default ListPage;
