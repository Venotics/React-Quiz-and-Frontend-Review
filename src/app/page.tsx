"use client";

import "./page.css";
import React from "react";
import qBank from "./qBank";

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [selected, setSelected] = React.useState<string | null>(null);

  const [shuffledQuestions] = React.useState(() =>
    qBank.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }))
  );

  const handleAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswer = (option: string) => {
    if (selected !== null) return;

    setSelected(option);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore((s) => s + 1);
    }
  };

  const q = shuffledQuestions[currentQuestion];
  const isAnswered = selected !== null;
  const isCorrect = isAnswered && selected === q.answer;

  return (
    <div>
      <div className="parent_container">
        <h1 className="box">
          This div is centered using a separate CSS class called
          "parent_container":
          <br></br> display: flex;
          <br></br> justify-content: center;
          <br></br> align-items: center;
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h1 className="box2">
          {" "}
          This div is centered using inline HTML code:
          <br></br> &lt;div style={"{{"}
          <br></br> display: 'flex',
          <br></br> justifyContent: 'center',
          <br></br> alignItems: 'center',
          <br></br> border: '1px solid black',
          <br></br> padding: '1rem'{"}}"}&gt;
        </h1>
      </div>

      <div className="flex justify-center items-center p-4">
        <h1 className="box3">
          {" "}
          This div is centered using Tailwind CSS:
          <br></br> &lt;div className="flex justify-center items-center p-4"&gt;
        </h1>
      </div>

      <div className="grid justify-center items-center p-4">
        <h1 className="box4">
          {" "}
          This div is centered using CSS Grid using Tailwind CSS:
          <br></br> &lt;div className="grid justify-center items-center p-4"&gt;
        </h1>
      </div>

      <div className="quiz-container">
        <div className="quiz-box">
          <h1 className="quiz-title">React Quiz</h1>
        </div>
        {showScore ? (
          <div className="resultContainer">
            <h1>
              You scored {score} out of {shuffledQuestions.length}!
            </h1>
            <button
              className="restartButton"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setSelected(null);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div style={{ display: "grid" }}>
            <h1 className="question-section">{q.question}</h1>
            {isAnswered && (
              <div
                className={`answerFeedback ${
                  isCorrect ? "correct" : "incorrect"
                }`}
                role="status"
                aria-live="polite"
                style={{ marginBottom: "1rem" }}
              >
                {isCorrect
                  ? "✅ Correct!"
                  : `❌ Incorrect! The correct answer is: ${q.answer}`}
              </div>
            )}

            <div className="optionsContainer">
              {q.options.map((option, index) => {
                const isUserChoice = selected === option;
                const shouldMarkCorrect = isAnswered && option === q.answer;
                const btnClass = [
                  "optionButton",
                  isUserChoice &&
                    isAnswered &&
                    (isCorrect ? "correct" : "incorrect"),
                  !isUserChoice && shouldMarkCorrect ? "reveal" : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <button
                    className={btnClass}
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={isAnswered} // lock choices after selection
                    aria-pressed={isUserChoice}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: "1rem" }}>
              <button
                className="nextButton"
                onClick={handleAnswerButtonClick}
                disabled={!isAnswered}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
