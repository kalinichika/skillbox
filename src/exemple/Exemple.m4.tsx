import React from "react";
import styles from "./Exemple.m2.css";

interface IState {
  count1: number;
  count2: number;
}

export class Exemple extends React.Component<{}, IState> {
  state: IState = {
    count1: 0,
    count2: 0,
  };

  private countWithArrows = (count: keyof IState) => {
    return (
      <div>
        <button
          className={styles["button"]}
          onClick={() =>
            this.setState((prev: IState) => ({
              ...prev,
              [count]: prev[count] - 1,
            }))
          }
        >
          {"<"}
        </button>

        {this.state[count]}

        <button
          className={styles["button"]}
          onClick={() =>
            this.setState((prev: IState) => ({
              ...prev,
              [count]: prev[count] + 1,
            }))
          }
        >
          {">"}
        </button>
      </div>
    );
  };

  public render() {
    const { count1, count2 } = this.state;
    return (
      <div>
        <header className={styles["header-container"]}>
          <h2 className={styles["header"]}>
            {`Результат ${count1} ${count2 >= 0 ? "+" : "-"} ${
              count2 >= 0 ? count2 : -count2
            } = ${count1 + count2}`}
          </h2>
        </header>
        <div className={styles["content-container--column"]}>
          {this.countWithArrows("count1")}
          {this.countWithArrows("count2")}
        </div>
      </div>
    );
  }
}
