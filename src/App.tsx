import { BrowserRouter } from "react-router-dom";
import "./App.ts";
import { Header } from "./components/Header/index";
import { Router } from "./components/Router.tsx";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
