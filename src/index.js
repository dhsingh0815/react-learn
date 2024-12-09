import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./DesignThinkingInReact";
//import App from "./DisplayableReactComponent";
//import App from "./ReactComponentWithStateAndEventHandler";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
