import { MainContainer } from "./App";
import "./App.ts";
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
      </MainContainer>
    </>
  );
}

export default App;
