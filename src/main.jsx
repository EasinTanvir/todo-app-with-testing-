import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextWrapper } from "./store/ContextApi.jsx";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextWrapper>
    <Toaster position="bottom-center" reverseOrder={false} />
    <App />
  </ContextWrapper>
);
