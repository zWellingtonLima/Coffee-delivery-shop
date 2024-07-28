import { Card } from "./components/Card";
import { CoffeeListContainer, SubTitle } from "./styles";
import { coffee } from "../../../data.json";

export function CoffeeListPage() {
  return (
    <section>
      <SubTitle>Nossos cafés</SubTitle>
      <CoffeeListContainer>
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListContainer>
    </section>
  );
}
