import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import GlobalStyles from "./Globalstyles";
import "@fontsource/overpass";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <App />
      <GlobalStyles />
    </>
  </React.StrictMode>
);
