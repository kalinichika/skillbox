import { hot } from "react-hot-loader/root";
import React from "react";
import { Exemple } from "./exemple/Exemple.m4.l3";
import "./App.css";

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Exemple />
      </div>
    );
  }
}
export const App = hot(() => <AppComponent />);
