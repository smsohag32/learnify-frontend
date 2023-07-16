import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";

// tenStack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PositionProvider from "./Context/PositionProvider";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PositionProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </PositionProvider>
  </React.StrictMode>
);
