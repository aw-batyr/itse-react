import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  B2b,
  Contacts,
  Home,
  News,
  NewsInner,
  StendForm,
} from "./pages";
import { BecomeSponsor } from "./pages/become-sponsor.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        element: <News />,
        path: "news",
      },
      {
        element: <NewsInner />,
        path: "news/:id",
      },
      {
        element: <B2b />,
        path: "B2B-B2G",
      },
      {
        element: <StendForm />,
        path: "stend-form",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Contacts />,
        path: "contacts",
      },
      {
        element: <BecomeSponsor />,
        path: "become-sponsor",
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
