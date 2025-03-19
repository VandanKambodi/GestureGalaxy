import React, { useState } from "react";
import "./quiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who developed React?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook",
  },
  {
    question: "Which language is used to style web pages?",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, questions[currentQuestion]]);
    }
    handleNextQuestion();
  };

  const handleSkipQuestion = () => {
    setSkippedQuestions([...skippedQuestions, questions[currentQuestion]]);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  // Function to determine feedback message
  const getFeedbackMessage = () => {
    const percentage = (score / questions.length) * 100;
    
    if (percentage === 100) {
      return "🎉 Amazing! You got a perfect score. Keep up the great work!";
    } else if (percentage >= 70) {
      return "👍 Good job! You did well, but there's room for improvement.";
    } else {
      return "📚 Keep practicing! Review the questions and try again.";
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          
          {/* Feedback Message */}
          <div className="feedback-message">
            <p>{getFeedbackMessage()}</p>
          </div>

          {/* Report Card Section */}
          <div className="report-card">
            <h3>📋 Report Card</h3>
            <p>📌 Total Questions: {questions.length}</p>
            <p>✅ Correct Answers: {score}</p>
            <p>❌ Wrong Answers: {incorrectAnswers.length}</p>
            <p>⏭ Skipped Questions: {skippedQuestions.length}</p>
          </div>

          {incorrectAnswers.length > 0 && (
            <div className="review-section">
              <h4>❌ Incorrect Answers:</h4>
              <ul>
                {incorrectAnswers.map((q, index) => (
                  <li key={index}>
                    <strong>{q.question}</strong> - Correct Answer: <b>{q.answer}</b>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {skippedQuestions.length > 0 && (
            <div className="review-section">
              <h4>⏭ Skipped Questions:</h4>
              <ul>
                {skippedQuestions.map((q, index) => (
                  <li key={index}>
                    <strong>{q.question}</strong> - Correct Answer: <b>{q.answer}</b>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="question-section">
          <img src={questions[currentQuestion].image} alt="Question" className="question-image"/>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>

          <button className="butt skip" onClick={handleSkipQuestion}>Skip</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
