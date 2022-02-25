import ReactDOM from "react-dom";
import { Suspense } from "react";

import { Providers } from "./providers";
import { ErrorBoundary } from "./components/ErrorBoundary";

import App from "./App";

ReactDOM.render(
  <Providers>
    <ErrorBoundary>
      <Suspense fallback={<div>loagin</div>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </Providers>,
  document.getElementById("root")
);
