import { useEffect, useState } from "react";
import { ShoppingCart } from "phosphor-react";

import {
  AddToCartBtn,
  BadgesContainer,
  CardContainer,
  CartCard,
  CoffeeBadge,
  CoffeeTitle,
  Order,
  Price,
} from "./styles";
import { QuantityInput } from "../../Form/QuantityInput";
import { useCart } from "../../../hooks/useCart";

export interface CardProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    badges: string[];
    price: number;
    imgSrc: string;
  };
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <CardContainer>
      <img src={coffee.imgSrc} alt={coffee.title} />
      <BadgesContainer>
        {coffee.badges.map((badge) => (
          <CoffeeBadge key={badge}>{badge}</CoffeeBadge>
        ))}
      </BadgesContainer>
      <CoffeeTitle>{coffee.title}</CoffeeTitle>
      <p>{coffee.description}</p>

      <CartCard>
        <Price>
          R$ <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order>
          <QuantityInput
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
          <AddToCartBtn onClick={handleAddItem}>
            <ShoppingCart weight="fill" size={22} />
          </AddToCartBtn>
        </Order>
      </CartCard>
    </CardContainer>
  );
}
