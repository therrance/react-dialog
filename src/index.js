import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import WebFontLoader from "webfontloader";

import App from "./App";

WebFontLoader.load({ google: { families: ["Open Sans:300,400,700"] } });

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
