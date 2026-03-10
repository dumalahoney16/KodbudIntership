import React, { useState, useEffect } from "react";
import "./App.css";

const questions = [
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Amazon", "Microsoft"],
    answer: "Facebook",
  },
  {
    question: "Which hook is used for state?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    question: "React is mainly used for?",
    options: ["Database", "UI Development", "Networking", "Machine Learning"],
    answer: "UI Development",
  },
  {
    question: "JSX stands for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript Extension",
    ],
    answer: "JavaScript XML",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
      return;
    }

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimer(10);
    setShowScore(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container">
      <h1>React Quiz Challenge</h1>

      {showScore ? (
        <div className="score-card">
          <h2>Your Score</h2>
          <h1>
            {score} / {questions.length}
          </h1>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>

          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>

          <p className="timer">Time Left: {timer}s</p>

          <h3>{questions[currentQuestion].question}</h3>

          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;