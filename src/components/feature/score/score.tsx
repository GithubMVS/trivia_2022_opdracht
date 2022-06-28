import React, { FC, useContext } from "react";
import styles from "./score.module.css";

// context import
import { DataContext } from "../../../Context";

const Score: FC = () => {

   const { score } = useContext(DataContext);

  return (
    <div className={styles.totalScore}>
      <p className={styles.points}>points:</p>
      <p className={styles.score}>{score}</p>
    </div>
  );
};

export default Score;
