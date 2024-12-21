import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Layout, Loading } from "../components/index";
import { Category, Desc, Price, Title } from "../components/styled/item";
import { Item } from "../type";
import { fetchItemData } from "../services/fetchItemData";

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

const ItemDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ItemPage: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data = {} as Item,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["item", id],
    queryFn: id
      ? () => fetchItemData(id)
      : () => Promise.reject(new Error("ID is required")),
  });

  if (isLoading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  if (error instanceof Error) return <Layout>Error: {error.message}</Layout>;

  return (
    <Layout>
      <ItemDetailsWrap>
        <Image src={data.image} alt={data.title} />
        <ItemInfo>
          <Title>{data.title}</Title>
          <Price>${data.price}</Price>
          <Category>{data.category}</Category>
          <Desc>{data.description}</Desc>
        </ItemInfo>
      </ItemDetailsWrap>
    </Layout>
  );
};

export default ItemPage;
