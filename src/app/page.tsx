"use client";

import "./page.css";
import React, { useState } from "react";
import qBank from "./qBank";
import PropsExample from "./propsExample";
import ApiRequestExample from "./apiExample/apiRequest";

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

  const [useStateHookOpen, setUseStateHookOpen] = useState(false);
  const [useRefHookOpen, setUseRefHookOpen] = useState(false);
  const [useEffectHookOpen, setUseEffectHookOpen] = useState(false);
  const [useContextHookOpen, setUseContextHookOpen] = useState(false);
  const [useCallbackHookOpen, setUseCallbackHookOpen] = useState(false);
  const [useMemoHookOpen, setUseMemoHookOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const onMessageSend = () => {
    setMessage(inputValue);
  };

  const clickUseState = () => {
    setUseStateHookOpen(!useStateHookOpen);
    setUseRefHookOpen(false);
    setUseEffectHookOpen(false);
    setUseContextHookOpen(false);
    setUseCallbackHookOpen(false);
    setUseMemoHookOpen(false);
  };

  const clickUseRef = () => {
    setUseRefHookOpen(!useRefHookOpen);
    setUseStateHookOpen(false);
    setUseEffectHookOpen(false);
    setUseContextHookOpen(false);
    setUseCallbackHookOpen(false);
    setUseMemoHookOpen(false);
  };

  const clickUseEffect = () => {
    setUseEffectHookOpen(!useEffectHookOpen);
    setUseStateHookOpen(false);
    setUseRefHookOpen(false);
    setUseContextHookOpen(false);
    setUseCallbackHookOpen(false);
    setUseMemoHookOpen(false);
  };

  const clickUseContext = () => {
    setUseContextHookOpen(!useContextHookOpen);
    setUseStateHookOpen(false);
    setUseRefHookOpen(false);
    setUseEffectHookOpen(false);
    setUseCallbackHookOpen(false);
    setUseMemoHookOpen(false);
  };

  const clickUseCallback = () => {
    setUseCallbackHookOpen(!useCallbackHookOpen);
    setUseStateHookOpen(false);
    setUseRefHookOpen(false);
    setUseEffectHookOpen(false);
    setUseContextHookOpen(false);
    setUseMemoHookOpen(false);
  };

  const clickUseMemo = () => {
    setUseMemoHookOpen(!useMemoHookOpen);
    setUseStateHookOpen(false);
    setUseRefHookOpen(false);
    setUseEffectHookOpen(false);
    setUseContextHookOpen(false);
    setUseCallbackHookOpen(false);
  };

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
      {/*-----------------------------------------------------------Centering a Div Section-----------------------------------------------------------*/}
      <div style={{ minHeight: "100vh", padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            How to center a div
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
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
              <br></br> &lt;div className="flex justify-center items-center
              p-4"&gt;
            </h1>
          </div>
          <div className="grid justify-center items-center p-4">
            <h1 className="box4">
              {" "}
              This div is centered using CSS Grid using Tailwind CSS:
              <br></br> &lt;div className="grid justify-center items-center
              p-4"&gt;
            </h1>
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------------React Quiz Section-----------------------------------------------------------*/}
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

      {/*-----------------------------------------------------------React Hooks Review Section-----------------------------------------------------------*/}
      <div
        style={{
          minHeight: "50vh",
          padding: "1rem",
          background: "rgba(77, 49, 63, 1)",
        }}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            React Hooks Review
          </h1>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <h1
            style={{
              border: "solid",
              borderColor: "rgba(40, 255, 130, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={clickUseState}
          >
            useState
          </h1>
          {useStateHookOpen && (
            <div
              style={{
                gridColumn: "span 3",
                border: "solid",
                borderColor: "rgba(100, 100, 255, 1)",
                padding: "1rem",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Definition:</h2>
              <p>
                The useState hook is a fundamental React hook that allows you to
                add state management to functional components. It returns an
                array with two elements: the current state value and a function
                to update that state.
              </p>
            </div>
          )}
          <h1
            style={{
              border: "solid",
              borderColor: "rgba(40, 255, 130, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={clickUseEffect}
          >
            useEffect
          </h1>
          {useEffectHookOpen && (
            <div
              style={{
                gridColumn: "span 3",
                border: "solid",
                borderColor: "rgba(100, 100, 255, 1)",
                padding: "1rem",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Definition:</h2>
              <p>
                The useEffect hook is a fundamental React hook that allows you
                to perform side effects in functional components. It takes a
                function as its first argument, which is executed after the
                component renders. The second argument is an optional dependency
                array that determines when the effect should re-run.
              </p>
            </div>
          )}
          <h1
            style={{
              border: "solid",
              borderColor: "rgba(40, 255, 130, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={clickUseContext}
          >
            useContext
          </h1>
          {useContextHookOpen && (
            <div
              style={{
                gridColumn: "span 3",
                border: "solid",
                borderColor: "rgba(100, 100, 255, 1)",
                padding: "1rem",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Definition:</h2>
              <p>
                The useContext hook is a fundamental React hook that allows you
                to access the value of a context directly within a functional
                component. It takes a context object (created using
                React.createContext) as its argument and returns the current
                context value, enabling components to consume context without
                needing to wrap them in a Context.Consumer component.
              </p>
            </div>
          )}
          <h1
            style={{
              border: "solid",
              borderColor: "rgba(40, 255, 130, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={clickUseRef}
          >
            useRef
          </h1>
          {useRefHookOpen && (
            <div
              style={{
                gridColumn: "span 3",
                border: "solid",
                borderColor: "rgba(100, 100, 255, 1)",
                padding: "1rem",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Definition:</h2>
              <p>
                The useRef hook is a fundamental React hook that allows you to
                create a mutable reference that persists across renders. It
                returns a ref object with a current property that can be used to
                store a value or reference a DOM element.
              </p>
            </div>
          )}
          <h1
            style={{
              border: "solid",
              borderColor: "rgba(40, 255, 130, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={clickUseMemo}
          >
            useMemo
          </h1>
          {useMemoHookOpen && (
            <div
              style={{
                gridColumn: "span 3",
                border: "solid",
                borderColor: "rgba(100, 100, 255, 1)",
                padding: "1rem",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Definition:</h2>
              <p>
                The useMemo hook is a fundamental React hook that allows you to
                memoize the result of a computation or function call. It takes a
                function and a dependency array as arguments and returns a
                memoized value that only recomputes when one of the dependencies
                changes.
              </p>
            </div>
          )}
          <h1
            style={{
              border: "solid",
              borderColor: "rgba(40, 255, 130, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={clickUseCallback}
          >
            useCallback
          </h1>
          {useCallbackHookOpen && (
            <div
              style={{
                gridColumn: "span 3",
                border: "solid",
                borderColor: "rgba(100, 100, 255, 1)",
                padding: "1rem",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Definition:</h2>
              <p>
                The useCallback hook is a fundamental React hook that allows you
                to memoize a function definition. It takes a function and a
                dependency array as arguments and returns a memoized version of
                the function that only changes if one of the dependencies has
                changed.
              </p>
            </div>
          )}
        </div>
      </div>
      {/*-----------------------------------------------------------React Props Review Section-----------------------------------------------------------*/}
      <div className="propsBackground">
        <div className="parent_container">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            React Props Review
          </h1>
        </div>
        <h1
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Enter a message you would like to send to the child component:{" "}
          <input
            name="msg"
            style={{ border: "solid", gap: "1rem", marginRight: "1rem" }}
            placeholder="Enter message here..."
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={onMessageSend} className="nextButton">
            Send
          </button>
        </h1>

        <PropsExample message={message} />
      </div>
      <div className="apiBackground">{/* <ApiRequestExample /> */}</div>
    </div>
  );
}
