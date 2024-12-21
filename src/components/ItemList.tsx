import React from "react";
import { Item } from "../type";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Category, Desc, Price, Title, Button } from "./styled/item";
import "../styles/common.style.css";
import { useCart } from "../hooks/useCart";
import { highlightText } from "../hooks/useInput";

interface IItemListProps {
  data: Item[];
  highlightKeyword?: string;
}

const ItemListWrap = styled.div`
  padding: 20px 0;
`;

const ListWrap = styled.a`
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.border};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${theme.colors.secondary};
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
`;

const ListItem: React.FC<{
  item: Item;
  handleCartClick?: () => void;
  isItemInCart: boolean;
  highlightKeyword?: string;
}> = React.memo(
  ({
    item,
    handleCartClick = () => {},
    isItemInCart = false,
    highlightKeyword = "",
  }) => (
    <ListWrap href={`/item/${item.id}`}>
      <div className="flexGap6">
        <Image src={item.image} alt={item.title} />
        <div>
          <Price>${item.price}</Price>
          <Category>{item.category}</Category>
          <Title>{highlightText(item.title, highlightKeyword)}</Title>
        </div>
      </div>
      <Desc>{highlightText(item.description, highlightKeyword)}</Desc>
      <Button
        color={isItemInCart ? "#9e9e9e" : ""}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          event.preventDefault();
          handleCartClick();
        }}
      >
        {isItemInCart ? "remove From Cart" : "Add to Cart"}
      </Button>{" "}
    </ListWrap>
  )
);

const ItemList: React.FC<IItemListProps> = ({
  data,
  highlightKeyword = "",
}) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isItemInCart = (itemId: number) => cart.has(itemId);

  return (
    <ItemListWrap>
      {data.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          isItemInCart={isItemInCart(item.id)}
          highlightKeyword={highlightKeyword}
          handleCartClick={() => {
            if (isItemInCart(item.id)) removeFromCart(item.id);
            else addToCart(item.id);
          }}
        />
      ))}
    </ItemListWrap>
  );
};

export default ItemList;
