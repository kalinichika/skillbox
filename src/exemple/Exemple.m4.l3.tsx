import React from "react";
import styles from "./Exemple.m2.css";

interface IState {
  count1: number;
  count2: number;
}

export function Exemple({}) {
  // const [count1, setCount1] = React.useState(0);
  // const [count2, setCount2] = React.useState(0);
  const [{ count1, count2 }, setState] = React.useState<IState>({
    count1: 0,
    count2: 0,
  });

  const countWithArrows = (count: keyof IState) => {
    const countValue = count === "count1" ? count1 : count2;
    // const setCount = count === "count1" ? setCount1 : setCount2;
    return (
      <div>
        <button
          className={styles["button"]}
          // onClick={() => setCount((prev) => prev - 1)}
          onClick={() =>
            setState((prev: IState) => ({
              ...prev,
              [count]: prev[count] - 1,
            }))
          }
        >
          {"<"}
        </button>

        {countValue}

        <button
          className={styles["button"]}
          // onClick={() => setCount((prev) => prev + 1)}
          onClick={() =>
            setState((prev: IState) => ({
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
        {countWithArrows("count1")}
        {countWithArrows("count2")}
      </div>
    </div>
  );
}
