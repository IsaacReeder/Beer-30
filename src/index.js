import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Lobster", "Montserrat Subrayada"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
