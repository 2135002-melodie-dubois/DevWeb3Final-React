import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { IntlProvider } from "react-intl";
import Francais from "./lang/fr.json";

const locale = "fr";
const messages = Francais;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </StrictMode>
);
