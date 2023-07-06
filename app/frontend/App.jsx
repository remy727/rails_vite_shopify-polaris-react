// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import AppFrame from "./AppFrame";

function App() {
  return (
    <BrowserRouter>
      <AppProvider i18n={translations}>
        <AppFrame />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
