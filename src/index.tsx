import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Providers } from "./providers";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById("root")
);
