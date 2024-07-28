import { Minus, Plus, ShoppingCart } from "phosphor-react";

import {
  AddToCartBtn,
  BadgesContainer,
  CardContainer,
  CartCard,
  CoffeeBadge,
  CoffeeTitle,
  Order,
  Price,
  QuantityInput,
} from "./styles";

interface CardProps {
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
  return (
    <CardContainer>
      <img src={coffee.imgSrc} alt={coffee.title} />
      <BadgesContainer>
        {coffee.badges.map((badge) => (
          <CoffeeBadge key={coffee.description}>{badge}</CoffeeBadge>
        ))}
      </BadgesContainer>
      <CoffeeTitle>{coffee.title}</CoffeeTitle>
      <p>{coffee.description}</p>

      <CartCard>
        <Price>
          R$ <span>{`${coffee.price}0`}</span>
        </Price>
        <Order>
          <QuantityInput>
            <button>
              <Minus size={22} />
            </button>
            <span>1</span>
            <button>
              <Plus size={22} />
            </button>
          </QuantityInput>
          <AddToCartBtn>
            <ShoppingCart weight="fill" size={22} />
          </AddToCartBtn>
        </Order>
      </CartCard>
    </CardContainer>
  );
}
