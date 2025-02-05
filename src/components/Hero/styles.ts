import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 1.25rem;

  @media (max-width: 1135px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    padding: 5.75rem 2rem;
  }

  @media (max-width: 650px) {
    > :last-child {
      display: none;
    }
  }

  img#hero-bg {
    position: absolute;
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 544px;
    width: 98vw;
    object-fit: cover;
    pointer-events: none;

    @media (max-width: 670px) {
      top: 8%;
      left: 50%;
    }

    @media (max-width: 660px) {
      display: none;
    }
  }
`;

export const HeroInfo = styled.div`
  /* min-width: 36.75rem; */
  margin-right: 2rem;

  @media (max-width: 1130px) {
    margin-right: 0;
  }

  > p {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme.colors["base-subtitle"]};

    @media (max-width: 1130px) {
      ${mixins.fonts.textM};
    }
  }
`;

export const Title = styled.h1`
word-wrap: normal;
${mixins.fonts.titleXL};

  @media (max-width: 770px) {
    ${mixins.fonts.titleL};
  }

  @media (max-width: 650px) {
      font-size: 1.75rem;
    }

  color: ${(props) => props.theme.colors["base-title"]};
  margin-bottom: 1rem;
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.125rem;
  gap: 1.25rem 0;
  
  @media (max-width: 1135px) {
    margin-top: 2rem;
    max-width: 700px;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 300px;

    span {
      color: ${(props) => props.theme.colors["base-text"]};
      ${mixins.fonts.textM}
      line-height: 0;
    }
  }
`;

export type BadgeVariant = "yellow-dark" | "yellow" | "base-text" | "purple";

interface BadgeVariantProps {
  variant: BadgeVariant;
}

export const Badge = styled.div<BadgeVariantProps>`
  border-radius: 50%;
  padding: 8px;
  background: ${(props) => props.theme.colors[props.variant]};
  line-height: 0;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`;
