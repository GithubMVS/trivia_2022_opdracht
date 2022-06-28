import React, { FC, useContext } from "react";
import styles from "./score.module.css";

// context import
import { DataContext } from "../../../Context";

const Score: FC = () => {

   const { score } = useContext(DataContext);

  return (
    <div className={styles.totalScore}>
      <p>points:</p>
      <p>{score}</p>
    </div>
  );
};

export default Score;
