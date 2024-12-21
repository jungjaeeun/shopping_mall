import React from "react";
import { Item } from "../type";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Button, Category, Desc, Price, Title } from "./styled/item";
import { useCart } from "../hooks/useCart";

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

const GridItem: React.FC<{
  item: Item;
  handleCartClick?: () => void;
  isItemInCart: boolean;
}> = React.memo(
  ({ item, handleCartClick = () => {}, isItemInCart = false }) => (
    <GridWrap href={`/item/${item.id}`}>
      <Image src={item.image} alt={item.title} />
      <Price>${item.price}</Price>
      <Category>{item.category}</Category>
      <Title>{item.title}</Title>
      <Desc>{item.description}</Desc>
      <Button
        full
        color={isItemInCart ? "#9e9e9e" : ""}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          event.preventDefault();
          handleCartClick();
        }}
      >
        {isItemInCart ? "remove From Cart" : "Add to Cart"}
      </Button>
    </GridWrap>
  )
);

const ItemGrid: React.FC<IItemGridProps> = ({ data }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isItemInCart = (itemId: number) => cart.has(itemId);

  return (
    <ItemGridWrapper>
      {data.map((item) => (
        <GridItem
          key={item.id}
          item={item}
          isItemInCart={isItemInCart(item.id)}
          handleCartClick={() => {
            if (isItemInCart(item.id)) removeFromCart(item.id);
            else addToCart(item.id);
          }}
        />
      ))}
    </ItemGridWrapper>
  );
};

export default ItemGrid;
