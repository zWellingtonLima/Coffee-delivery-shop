import { MainContainer } from "./styles";
import { CoffeeListPage } from "../../components/CoffeeListPage";
import { Hero } from "../../components/Hero";

export function Home() {
  return (
    <MainContainer>
      <Hero />
      <CoffeeListPage />
    </MainContainer>
  );
}
