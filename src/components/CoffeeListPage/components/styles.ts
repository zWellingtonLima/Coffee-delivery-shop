import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const CardContainer = styled.div`
  padding: 20px;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -2.5rem;
  }

  p {
    color: ${(props) => props.theme.colors["base-label"]};
    text-align: center;
    ${mixins.fonts.textS}
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const CoffeeBadge = styled.span`
  ${mixins.fonts.tag}
  text-transform: uppercase;
  color: ${(props) => props.theme.colors["yellow-dark"]};
  background: ${(props) => props.theme.colors["yellow-light"]};
  padding: 4px 8px;
  border-radius: 100px;
  margin: 12px 0 16px 0;
`;

export const CoffeeTitle = styled.h3`
  ${mixins.fonts.titleS}
  color: ${(props) => props.theme.colors["base-subtitle"]};
  margin-bottom: 8px;
`;

export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 2rem;
`;

export const Price = styled.div`
  color: ${(props) => props.theme.colors["base-text"]};
  ${mixins.fonts.textS}

  span {
    ${mixins.fonts.titleM}
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityInput = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  transition: all 0.2s;
  padding: 8px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors["base-button"]};

  span {
    ${mixins.fonts.textM}
    line-height: 0;
    margin-top: 2px;
  }

  button {
    line-height: 0;
    background: transparent;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};

    &:hover {
      color: ${(props) => props.theme.colors["purple-dark"]};
    }
  }
`;

export const AddToCartBtn = styled.button`
  padding: 8px;
  line-height: 0;
  background: ${(props) => props.theme.colors["purple-dark"]};
  border-radius: 6px;
  transition: all .1s;

  &:hover{
    background: ${(props) => props.theme.colors.purple};
  }

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`;
