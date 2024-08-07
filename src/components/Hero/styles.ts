import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.75rem 1.25rem;
  
  img#hero-bg {
    position: absolute;
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 544px;
    width: 98vw;
    object-fit: cover;
    pointer-events: none;
  }
`;

export const HeroInfo = styled.div`
  min-width: 36.75rem;

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
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.125rem;
  gap: 1.25rem 0;

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
