import React from "react";
import { Item } from "../type";
import styled from "styled-components";
import { textEllipsis } from "../styles/GlobalStyle";

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

const GridWrap = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #555;
`;

const Category = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #888;
  ${textEllipsis}
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  ${textEllipsis}
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`;

const GridItem: React.FC<{ item: Item }> = ({ item }) => (
  <GridWrap>
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
