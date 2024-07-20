import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import {
  HeroContainer,
  Title,
  HeroInfo,
  BadgeContainer,
  Badge,
} from "./styles";

export function Hero() {
  return (
    <HeroContainer>
      <HeroInfo>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <BadgeContainer>
          <div>
            <Badge variant="yellow-dark">
              <ShoppingCart weight="fill" size={16} />
            </Badge>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <Badge variant="base-text">
              <Package weight="fill" size={16} />
            </Badge>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <Badge variant="yellow">
              <Timer weight="fill" size={16} />
            </Badge>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <Badge variant="purple">
              <Coffee weight="fill" size={16} />
            </Badge>
            <span>O café chega fresquinho até você</span>
          </div>
        </BadgeContainer>
      </HeroInfo>
      <img src="/images/heroCoffee.png" alt="" />
    </HeroContainer>
  );
}
