import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GlobalStyle } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);