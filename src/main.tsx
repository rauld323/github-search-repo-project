import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const reactQueryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  

  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);
