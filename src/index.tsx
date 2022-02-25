import ReactDOM from "react-dom";

import { Providers } from "./providers";

import App from "./App";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
