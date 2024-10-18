import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.tsx";
import "./index.css";
import ThemeProvider from "./contexts/ThemeContext.tsx";
import { store } from "./redux/store.ts";
import i18n from "./locales/i18n.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <App />
            <ToastContainer />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
