import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NotFound } from "./screens/NotFound";
import { Contador } from "./screens/Contador";

const router = createBrowserRouter([
  {
    path: "/", // caminho na url para esse componente
    element: <App />, // componente que será renderizado nessa rota
    errorElement: <NotFound /> // componente que será renderizado ao não achar a rota passada na url
  },
  {
    path: "/contador",
    element: <Contador />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
