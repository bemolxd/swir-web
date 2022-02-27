import ReactDOM from "react-dom";
import { Suspense } from "react";

import { Providers } from "./providers";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoading } from "./components/Loading";

import App from "./App";

ReactDOM.render(
  <Providers>
    <ErrorBoundary>
      <Suspense fallback={<PageLoading />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </Providers>,
  document.getElementById("root")
);
