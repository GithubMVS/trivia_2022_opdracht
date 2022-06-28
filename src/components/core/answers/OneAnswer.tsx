import React, { FC, useContext } from "react";
import styles from "../answers/OneAnswer.module.css";

// context import
import { DataContext } from "../../../Context";

const OneQuestion: FC = () => {
  const { answers, setAnsweredAnswer, handleClickOnAnswer } = useContext(DataContext);

  return (
    <div className={styles.buttons}>
      {answers.map((answer: string) => (
        <button className={styles.buttonLayout} onClick={() => setAnsweredAnswer(answer) + handleClickOnAnswer()} key={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default OneQuestion;
