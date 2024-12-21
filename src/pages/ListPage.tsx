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
import useSelect, { makeFieldList } from "../hooks/useSelect";
import { Item } from "../type";

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
    error,
  } = useQuery({
    queryKey: ["dataKey"],
    queryFn: fetchListData,
    staleTime: 50 * 60 * 1000, // 50분 동안 캐시된 데이터를 사용
    refetchOnWindowFocus: false, // 창 포커스 시 새로고침 방지
    refetchOnReconnect: false, // 네트워크 재연결 시 새로고침 방지
  });
  const categories = makeFieldList<Item, "category">(data, "category");
  const modes = useMemo(() => ["grid", "list"], []);

  const [keyword, handleChangeKeyword] = useInput("");
  const [category, handleSelectCategory] = useSelect(categories, categories[0]);
  const [mode, handleSetMode] = useSelect(modes, modes[0]);

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
        {mode === "grid" ? <ItemGrid data={data} /> : <ItemList data={data} />}
      </CartProvider>
    </Layout>
  );
};

export default ListPage;
