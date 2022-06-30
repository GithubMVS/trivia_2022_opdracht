import React, { FC, useContext } from "react";
import styles from "./time.module.css";

// context import
import { DataContext } from "../../../Context";

// images
import timer from "../../../globals/images/timer/time.svg";

const Time: FC = () => {
  const { timeToAnswer } = useContext(DataContext);

  return (
    <>
      <div className={styles.timer_container}>
        <img className={styles.timer_image} src={timer} alt="your lives" />
        <p className={styles.timer_text}>{timeToAnswer}</p>
      </div>
    </>
  );
};

export default Time;
