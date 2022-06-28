import React, { FC, useContext } from "react";
import styles from "../oneQuestion/OneAnswer.module.css";

// context import
import { DataContext } from "../../../Context";

const OneQuestion: FC = () => {
  const { answers, setAnsweredAnswer } = useContext(DataContext);

  return (
    <>
      {answers.map((answer: string) => (
        <button onClick={() => setAnsweredAnswer(answer)} key={answer}>
          {answer}
        </button>
      ))}
    </>
  );
};

export default OneQuestion;
