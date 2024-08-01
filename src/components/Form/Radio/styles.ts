import styled from "styled-components";

import { mixins } from "../../../styles/mixins";

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors["base-button"]};
  color: ${(props) => props.theme.colors["base-text"]};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors["base-hover"]};
  }

  &[data-state="true"] {
    background-color: ${(props) => props.theme.colors["purple-light"]};
    border-color: ${(props) => props.theme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`;
