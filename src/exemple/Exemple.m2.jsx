import React from "react";
import { styles } from "./Exemple.m2.css";

export class Exemple extends React.Component {
  state = {
    textIsShow: false,
  };
  render() {
    const { textIsShow } = this.state;
    return (
      <div>
        <header className={styles["header-container"]}>
          <h2 className={styles["header"]}>Hello React with Skillbox!</h2>
          <p className={styles["header-comment"]}>Module 2 finished</p>
        </header>
        <div className={styles["content-container"]}>
          <button
            className={styles["button"]}
            onClick={() =>
              this.setState((prev) => ({ textIsShow: !prev.textIsShow }))
            }
          >
            {textIsShow ? "Hide text" : "Show text"}
          </button>
          {textIsShow && <h3 className="show-text"> Here i'm </h3>}
        </div>
      </div>
    );
  }
}
