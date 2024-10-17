import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import ThemeProvider from "./contexts/ThemeContext.tsx";
import { store } from "./redux/store.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
