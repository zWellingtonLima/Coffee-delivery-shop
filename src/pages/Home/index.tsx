import { MainContainer } from "../../App";
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
