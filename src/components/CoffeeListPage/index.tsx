import { Card } from "./components/Card";
import { CoffeeListContainer, SubTitle } from "./styles";

export function CoffeeListPage() {
  return (
    <section>
      <SubTitle>Nossos cafés</SubTitle>
      <CoffeeListContainer>
        <Card />
      </CoffeeListContainer>
    </section>
  );
}
