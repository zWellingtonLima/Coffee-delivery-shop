import { Outlet } from "react-router-dom";

import { Header } from "./components/Header/index.tsx";
import { CartContextProvider } from "./contexts/CartProvider.tsx";
import { GlobalStyle } from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
