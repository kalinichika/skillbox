import * as React from "react";
import ReactDOM from "@hot-loader/react-dom";
import Header from "../shared/Header";

window.addEventListener("load", () => {
  ReactDOM.hydrate(<Header />, document.getElementById("react-root"));
});
