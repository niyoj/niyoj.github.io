import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";

// importing necessary css stylesheets
import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/variables.css";
import "./assets/stylesheets/utilities.css";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
