import React, { useMemo } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

// component
import {
  Filter,
  Search,
  ItemGrid,
  ItemList,
  Layout,
  Loading,
} from "../components/index";

// hook/service/type
import { fetchListData } from "../services/fetchListData";
import { CartProvider } from "../hooks/useCart";
import useInput from "../hooks/useInput";
import useDebounce from "../hooks/useDebounce";
import useSearch from "../hooks/useSearch";
import useSelect from "../hooks/useSelect";
import { Item } from "../type";
import { makeFieldList } from "../utils/common";

const FilterWrap = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 12px 0;
`;

const ListPage: React.FC<{}> = () => {
  const {
    data = [] as Item[],
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["list"],
    queryFn: fetchListData,
  });
  const categories = useMemo(
    () => ["all", ...makeFieldList<Item, "category">(data, "category")],
    [data]
  );
  const modes = useMemo(() => ["grid", "list"], []);

  const [keyword, handleChangeKeyword] = useInput("");
  const [category, handleSelectCategory] = useSelect(categories, categories[0]);
  const [mode, handleSetMode] = useSelect(modes, modes[0]);
  const debouncedKeyword = useDebounce(keyword, 300);
  const searchResults: Item[] = useSearch(data, debouncedKeyword, category);

  console.log({ isFetching, isLoading });
  if (isLoading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  if (error instanceof Error) return <Layout>Error: {error.message}</Layout>;

  return (
    <Layout>
      <CartProvider>
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
        {mode === "grid" ? (
          <ItemGrid data={searchResults} highlightKeyword={debouncedKeyword} />
        ) : (
          <ItemList data={searchResults} highlightKeyword={debouncedKeyword} />
        )}
      </CartProvider>
    </Layout>
  );
};

export default ListPage;
