import React, { FC, useContext } from "react";
import styles from "../questionAndAnswers/QuestionAndAnswers.module.css";

import OneAnswer from "../answers/OneAnswer";

// context import
import { DataContext } from "../../../Context";

const QuestionAndAnswers: FC = () => {
  const { question } = useContext(DataContext);

  return (
    <>
      <p className={styles.question}>{question}</p>
      <div className={styles.answers}>
        <OneAnswer />
      </div>
    </>
  );
};

export default QuestionAndAnswers;
