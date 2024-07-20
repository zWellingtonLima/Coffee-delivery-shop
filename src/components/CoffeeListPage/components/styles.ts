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
