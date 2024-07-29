import { useState } from "react";
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
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);
  const [coffeePrice, setCoffeePrice] = useState(coffee.price);

  const increaseCoffeeAmount = () => {
    setCoffeeQuantity((state) => state + 1);
    handleCoffeePrice("plus");
  };

  const decreaseCoffeeAmount = () => {
    if (coffeeQuantity === 1) return;

    setCoffeeQuantity((state) => state - 1);
    handleCoffeePrice("minus");
  };

  const handleCoffeePrice = (operation: "plus" | "minus") => {
    const coffeeFixedPrice = 9.9;

    if (operation === "minus") {
      setCoffeePrice((state) => (state -= coffeeFixedPrice));
    } else {
      setCoffeePrice((state) => (state += coffeeFixedPrice));
    }
  };

  const handleAddCoffee = () => {

  }

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
          R$ <span>{coffeePrice.toFixed(2)}</span>
        </Price>
        <Order>
          <QuantityInput>
            <button onClick={decreaseCoffeeAmount}>
              <Minus size={22} />
            </button>
            <span>{coffeeQuantity}</span>
            <button onClick={increaseCoffeeAmount}>
              <Plus size={22} />
            </button>
          </QuantityInput>
          <AddToCartBtn onClick={handleAddCoffee}>
            <ShoppingCart weight="fill" size={22} />
          </AddToCartBtn>
        </Order>
      </CartCard>
    </CardContainer>
  );
}
