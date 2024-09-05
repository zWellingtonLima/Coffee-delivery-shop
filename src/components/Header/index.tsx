import { MapPin, ShoppingCart } from "phosphor-react";

import {
  UserLocation,
  CartContainer,
  Header as HeaderContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="./images/brand.png" alt="Logo do Coffee Delivery" />
      </Link>
      <div>
        <UserLocation>
          <MapPin size={22} weight="fill" />
          <span>Espinho, PT</span>
        </UserLocation>
        <Link to={"/cart"} aria-disabled={cart.length === 0} title="Carrinho de compras">
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </CartContainer>
        </Link>
      </div>
    </HeaderContainer>
  );
}
