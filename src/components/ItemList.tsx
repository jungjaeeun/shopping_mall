import React from "react";
import { Item } from "../type";
import styled from "styled-components";
import { textEllipsis } from "../styles/GlobalStyle";

interface IItemListProps {
  data: Item[];
}

const ListWrapper = styled.div`
  padding: 20px;
`;

const ListItem = styled.li`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
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

const ItemList: React.FC<IItemListProps> = ({ data }) => {
  return (
    <ListWrapper>
      <ul>
        {data.map((item) => (
          <ListItem key={item.id}>
            <Image src={item.image} alt={item.title} />
            <Price>${item.price}</Price>
            <Category>{item.category}</Category>
            <Title>{item.title}</Title>
            <Desc>{item.description}</Desc>
          </ListItem>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default ItemList;
