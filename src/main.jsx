import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkProvider } from "./context/DarkProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </React.StrictMode>
);
