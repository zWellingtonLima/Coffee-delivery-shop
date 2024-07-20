import { MainContainer } from "./App";
import "./App.ts";
import { CoffeeListPage } from "./components/CoffeeListPage/index.tsx";
import { Header } from "./components/Header/index";
import { Hero } from "./components/Hero/index.tsx";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Hero />
        <CoffeeListPage />
      </MainContainer>
    </>
  );
}

export default App;
