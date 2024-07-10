import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={new QueryClient()}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
