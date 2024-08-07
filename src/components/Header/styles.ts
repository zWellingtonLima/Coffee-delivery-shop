import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Header = styled.header`
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
  padding: 2rem 1.25rem;
  margin: 0 auto;

  > div {
    display: flex;
  }

  div a {
    display: flex;
    margin-left: 12px;

    &[aria-disabled="true"] {
      pointer-events: none;
    }
  }
`;

const BaseStyles = styled.div`
  border-radius: 6px;
  padding: 8px;
  display: flex;
  align-items: center;
`;

export const UserLocation = styled(BaseStyles)`
  justify-content: space-between;
  gap: 4px;

  ${mixins.fonts.textS};

  color: ${(props) => props.theme.colors["purple"]};

  background: ${(props) => props.theme.colors["purple-light"]};
  svg {
    color: ${(props) => props.theme.colors["purple"]};
  }
`;

export const CartContainer = styled(BaseStyles)`
  background: ${(props) => props.theme.colors["yellow-light"]};
  position: relative;

  svg {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  a {
    display: flex;
  }

  span {
    ${mixins.fonts.textS};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors["yellow-dark"]};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);
  }
`;
