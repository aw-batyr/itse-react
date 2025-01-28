import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, B2b, Contacts, Home, StandForm } from "./pages";
import { BecomeSponsor } from "./pages/become-sponsor.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <B2b />,
        path: "/B2B-B2G",
      },
      {
        element: <StandForm />,
        path: "/stend-form",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Contacts />,
        path: "/contacts",
      },
      {
        element: <BecomeSponsor />,
        path: "/become-sponsor",
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
