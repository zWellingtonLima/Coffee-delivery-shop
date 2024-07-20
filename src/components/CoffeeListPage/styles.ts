import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CoffeeListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
    margin-top: 2rem;
`;

export const SubTitle = styled.h2`
  ${mixins.fonts.titleL}
`;
