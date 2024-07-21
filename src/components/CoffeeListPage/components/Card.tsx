import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { getCoffeeList } from "../../../utils/getCoffeeList";
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

export function Card() {
  const coffeeList = getCoffeeList();

  return (
    <>
      {coffeeList.map((coffee) => (
        <CardContainer key={coffee.id}>
          <img src={coffee.imgSrc} alt={coffee.title} />
          <BadgesContainer>
            {coffee.badges.length > 1 ? (
              coffee.badges.map((badge) => (
                <CoffeeBadge key={coffee.imgSrc}>{badge}</CoffeeBadge>
              ))
            ) : (
              <CoffeeBadge>{coffee.badges}</CoffeeBadge>
            )}
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
                <ShoppingCart weight="fill" size={22}/>
              </AddToCartBtn>
            </Order>
          </CartCard>
        </CardContainer>
      ))}
    </>
  );
}
