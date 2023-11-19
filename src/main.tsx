import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./Home-page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
