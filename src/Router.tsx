import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CartPage } from "./pages/Cart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<CartPage />} />
    </Routes>
  );
}
