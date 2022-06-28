export const mergeAnswer = async (wrongAnswers: string[], correctAnswer: string, data: string[]) => {
  // map over wrong answers and push them in question array
  await wrongAnswers.map((wrongAnswer: string) => data.push(wrongAnswer));

  // add right answer
  await data.push(correctAnswer);

  // randomize the array
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
};
