import { CoffeeListPage } from "../../components/CoffeeListPage";
import { Hero } from "../../components/Hero";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Hero />
      <CoffeeListPage />
    </Container>
  );
}
