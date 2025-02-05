import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CoffeeListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  margin-top: 2rem;
  margin-bottom: 6rem;

  @media (max-width: 870px){
    padding: 0 .75rem;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 3.375rem;
  ${mixins.fonts.titleL};
  margin-left: 2rem;
`;
