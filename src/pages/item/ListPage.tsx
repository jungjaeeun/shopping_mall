import React from "react";
import Layout from "../../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../services/fetchData";
import styled from "styled-components";
import { Item } from "../../type";
import ItemCard from "../../components/ItemCard";

const ItemWrapper = styled.div`
  padding: 20px 0;
  display: grid; // grid layout 사용
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const ListPage: React.FC<{}> = () => {
  const {
    data = [] as Item[],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dataKey"],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <Layout>
      <div>검색&필터&카드|리스트 형식 ZONE</div>
      <ItemWrapper>
        {data.map((item: Item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </ItemWrapper>
    </Layout>
  );
};

export default ListPage;
