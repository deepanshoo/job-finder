import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import global_en from "./translations/en/global_en.json";
import global_jp from "./translations/jp/global_jp.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next
  .init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        global: global_en,
      },
      jp: {
        global: global_jp,
      },
    },
  })
  .then(() => {
    console.log("i18next initialized successfully");
  })
  .catch((error) => {
    console.error("Error initializing i18next:", error);
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
