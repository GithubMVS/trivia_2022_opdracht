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
import Score from "./components/feature/score/score";
import Lives from "./components/feature/lives/life";

// functions
import { mergeAnswer } from "./core/utils/converters/mergeAnswers";

// context
import { DataContext } from "./Context";

function App() {
  const [answeredAnswer, setAnsweredAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [rightAnswer, setRightAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(5);

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

      // fetch the right answer
      setRightAnswer(answers.correctAnswer);
    });
  };

  // handle score + lives
  useEffect(() => {
    // handle lives + score when answering
    if (answeredAnswer === rightAnswer) {
      setScore(score + 1000);
    } else {
      setScore(score + 0);
      setLives(lives - 1);
    }
  }, [answeredAnswer]);

  // handles lives you answer 5x wrong
  if (lives < 1) {
    setScore(0);
    setLives(5);
  }

  // handle's fetching a new question
  const handleClickOnAnswer = async () => {
    await fetchOneQuestion();
  };

  // fetches the first question
  useEffect(() => {
    fetchOneQuestion();
  }, []);

  return (
    <>
      <img className={`${styles.absolute} ${styles.behind}`} src={behind} alt="behind" />
      <img className={`${styles.absolute} ${styles.bottom_right}`} src={bottom_right} alt="bottom_right" />
      <img className={`${styles.absolute} ${styles.top_left}`} src={top_left} alt="top_left" />
      <img className={`${styles.absolute} ${styles.top_right}`} src={top_right} alt="top_right" />

      <DataContext.Provider value={{ question, answers, setAnsweredAnswer, score, handleClickOnAnswer, lives }}>
        <div className={styles.container_full}>
          <p className={styles.title}>Quiz Varia 2022</p>
          <div className={styles.center}>
            <div className={styles.content}>
              <div className={styles.score_lives_time}>
                <p>tijd</p>
                <Score />
                <Lives />
              </div>
              <div className={styles.questionAndAnswers}>
                <QuestionAndAnswers />
              </div>
            </div>
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
