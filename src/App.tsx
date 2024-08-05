import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { CartContextProvider } from "./contexts/CartProvider.tsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
