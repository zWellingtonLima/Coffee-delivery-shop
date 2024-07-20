import { MapPin, ShoppingCart } from "phosphor-react";

import {
  UserLocation,
  CartContainer,
  Header as HeaderContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="Coffee Delivery icon" />
      <div>
        <UserLocation>
          <MapPin size={22} weight="fill" />
          <span>Espinho, PT</span>
        </UserLocation>
        <CartContainer>
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </div>
    </HeaderContainer>
  );
}
