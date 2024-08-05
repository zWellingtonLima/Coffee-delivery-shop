import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeroContainer = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }

  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.75rem 1.25rem;
`;

export const HeroInfo = styled.div`
  max-width: 36.75rem;

  > p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const Title = styled.h1`
  ${mixins.fonts.titleXL};

  color: ${(props) => props.theme.colors["base-title"]};
  margin-bottom: 1rem;
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-template: auto / auto auto;
  margin-top: 4.125rem;
  gap: 1.25rem 2.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

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
