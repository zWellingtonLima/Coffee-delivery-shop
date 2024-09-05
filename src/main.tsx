import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/index.tsx";
import { CartPage } from "./pages/Cart/index.tsx";
import { Success } from "./pages/Success/index.tsx";

const router = createBrowserRouter([
  {
    path: "/Coffee-delivery-shop",
    element: <App />,
    children: [
      {
        path: "/Coffee-delivery-shop",
        element: <Home />,
      },
      {
        path: "/Coffee-delivery-shop/cart",
        element: <CartPage />,
      },
      {
        path: "/Coffee-delivery-shop/order/:orderId/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
