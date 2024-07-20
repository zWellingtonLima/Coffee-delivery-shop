import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Header = styled.header`
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  margin: 0 auto;

  > div {
    display: flex;
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

  display: flex;
  justify-content: center;
  line-height: 0;
  margin-left: 12px;

  svg {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }
`;
