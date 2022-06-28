import styles from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

// images
import behind from "./globals/images/background_images/behind.svg";
import bottom_right from "./globals/images/background_images/bottom_right.svg";
import top_left from "./globals/images/background_images/top_left.svg";
import top_right from "./globals/images/background_images/top_right.svg";

// components
import QuestionAndAnswers from "./components/core/questionAndAnswers/QuestionAndAnswers";

// functions
import { mergeAnswer } from "./core/utils/converters/mergeAnswers";

// context
import { DataContext } from "./Context";

function App() {
  // states
  const [answeredAnswer, setAnsweredAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [question, setQuestion] = useState<string>("");

  const fetchOneQuestion = async () => {
    await axios({
      method: "get",
      url: `https://the-trivia-api.com/api/questions?limit=1`,
    }).then((response) => {
      const answers = response.data[0];
      const data: string[] = [];

      // put all data in the data array and randomize it
      mergeAnswer(answers.incorrectAnswers, answers.correctAnswer, data);

      // push the array in a state
      setAnswers(data);

      // put the queston in a state
      setQuestion(response.data[0].question);
    });
  };

  // const checkIfAnswerIsCorrect = () => {};

  useEffect(() => {
    fetchOneQuestion();
  }, []);

  return (
    <>
      <img className={`${styles.absolute} ${styles.behind}`} src={behind} alt="behind" />
      <img className={`${styles.absolute} ${styles.bottom_right}`} src={bottom_right} alt="bottom_right" />
      <img className={`${styles.absolute} ${styles.top_left}`} src={top_left} alt="top_left" />
      <img className={`${styles.absolute} ${styles.top_right}`} src={top_right} alt="top_right" />

      <DataContext.Provider value={{question, answers, setAnsweredAnswer}}>
        <div className={styles.container_full}>
          <p className={styles.title}>Quiz Varia 2022</p>
          <div className={styles.center}>
            <div className={styles.content}>
              <QuestionAndAnswers />
            </div>
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
