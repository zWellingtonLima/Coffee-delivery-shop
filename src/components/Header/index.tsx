import { MapPin, ShoppingCart } from "phosphor-react";

import {
  UserLocation,
  CartContainer,
  Header as HeaderContainer,
} from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src="/logo.svg" alt="Coffee Delivery icon" />
      </Link>
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
