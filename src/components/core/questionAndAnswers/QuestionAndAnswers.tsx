import React, { FC, useContext } from "react";
import styles from "../questionAndAnswers/QuestionAndAnswers.module.css";

import OneAnswer from "../answers/OneAnswer";

// context import
import { DataContext } from "../../../Context";

const QuestionAndAnswers: FC = () => {
  const { question } = useContext(DataContext);

  return (
    <>
      <div>{question}</div>
      <OneAnswer />
    </>
  );
};

export default QuestionAndAnswers;
