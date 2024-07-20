import { getCoffeeList } from "../../../utils/getCoffeeList";
import {
  BadgesContainer,
  CardContainer,
  CoffeeBadge,
  CoffeeTitle,
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
        </CardContainer>
      ))}
    </>
  );
}
