import { hot } from "react-hot-loader/root";
import React from "react";
import "./main.global.css";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";

class AppComponent extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        {/* <Content/> */}
      </Layout>
    );
  }
}
export const App = hot(() => <AppComponent />);
