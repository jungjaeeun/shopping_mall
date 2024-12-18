import React from "react";
import { Item } from "../type";
import styled from "styled-components";
import { textEllipsis } from "../styles/GlobalStyle";

interface IItemCardProps {
  item: Item;
}

const CardWrap = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Desc = styled.p``;

const Category = styled.p`
  ${textEllipsis}
`;

const Title = styled.h3`
  ${textEllipsis}
`;

const Price = styled.p``;

const ItemCard: React.FC<IItemCardProps> = ({ item }) => {
  return (
    <CardWrap>
      <Image src={item.image}></Image>
      <Price>${item.price}</Price>
      <Category>{item.category}</Category>
      <Title>{item.title}</Title>
      <Desc>{item.description}</Desc>
    </CardWrap>
  );
};

export default ItemCard;
