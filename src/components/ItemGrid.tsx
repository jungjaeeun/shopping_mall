import React from "react";
import { Item } from "../type";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Category, Desc, Price, Title } from "./styled/item";

interface IItemGridProps {
  data: Item[];
}

const ItemGridWrapper = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const GridWrap = styled.a`
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${theme.colors.secondary};
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const GridItem: React.FC<{ item: Item }> = ({ item }) => (
  <GridWrap href={`/item/${item.id}`}>
    <Image src={item.image} alt={item.title} />
    <Price>${item.price}</Price>
    <Category>{item.category}</Category>
    <Title>{item.title}</Title>
    <Desc>{item.description}</Desc>
  </GridWrap>
);

const ItemGrid: React.FC<IItemGridProps> = ({ data }) => {
  return (
    <ItemGridWrapper>
      {data.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </ItemGridWrapper>
  );
};

export default ItemGrid;
