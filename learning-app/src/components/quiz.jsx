import React, { useState } from "react";
import "./quiz.css";
import Certificate from "./Certificate";

const questions = [
  {
    question: "Which Fingerspelling system is used in india?",
    options: ["One - Handed", "Two - Handed", "Four - fingered", "Six - fingered"],
    answer: "Two - Handed",
  },
  {
    question: "What is the Indian Sign Language sign for 'Hello'?",
    options: ["Hand wave", "Thumbs up", "Clap", "Pointing finger"],
    answer: "Hand wave",
  },
  {
    question: "How do you sign 'Thank You' in ISL?",
    options: ["Touch chin and move outward", "Fold hands", "Nod head", "Raise both hands"],
    answer: "Touch chin and move outward",
  },
  {
    question: "Which gesture represents 'Mother' in ISL?",
    options: ["Touch forehead with index finger", "Cross arms over chest", "Touch chin with thumb", "Point to the sky"],
    answer: "Touch chin with thumb",
  },
  {
    question: "What is the ISL sign for 'Food'?",
    options: ["Hand on stomach", "Fingers touching lips", "Finger pointing to mouth", "Palm facing up"],
    answer: "Fingers touching lips",
  },
  {
    question: "What is being signed in this image?",
    image: "./please.png",
    options: ["Hello", "Bye", "Please", "Thank you"],
    answer: "Please",
  },
  {
    question: "Which character it is indicating?",
    image: "./letterj.png",
    options: ["F", "J", "K", "G"],
    answer: "J",
  },
  {
    "question": "How do you express 'I love you' in Indian Sign Language?",
    "options": ["Point to heart and make a fist", "Show 'ILY' hand sign", "Cross arms over chest", "Thumbs up"],
    "answer": "Show 'ILY' hand sign"
  },

  {
    question: "What is the chemical formula of water?",
    options: ["H2O", "CO2", "O2", "CH4"],
    answer: "H2O"
  },
  {
    question: "What is the perimeter of a square with side length 5 cm?",
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    answer: "20 cm"
  },

  {
    question: "Solve for x: 3x + 5 = 17",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
    answer: "Mitochondria"
  },
  {
    question: "What is Newton's Third Law of Motion?",
    options: ["Objects in motion stay in motion", "F = ma", "For every action, there is an equal and opposite reaction", "Energy cannot be created or destroyed"],
    answer: "For every action, there is an equal and opposite reaction"
  },
  {
    question: "What is the area of a circle with radius 7 cm?",
    options: ["49π cm²", "14π cm²", "21π cm²", "28π cm²"],
    answer: "49π cm²"
  },
  {
    question: "Which organ is responsible for pumping blood in the body?",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    answer: "Heart"
  },

];

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [userName, setUserName] = useState("");
  const [confirmQuiz, setConfirmQuiz] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (!selectedOptions[currentQuestion]) {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      } else {
        setIncorrectAnswers([...incorrectAnswers, questions[currentQuestion]]);
      }
    }
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: selectedOption });
  };

  const handleSkipQuestion = () => {
    setSkippedQuestions([...skippedQuestions, questions[currentQuestion]]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true); // Show score when last question is submitted
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

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
      {/* Intro Screen */}
      {!quizStarted ? (
        <div className="quiz-intro">
          <h2 id="quiz-text-front1"><center>Welcome to the Quiz!</center></h2>
          <p id="quiz-text-front">📌 Attempt all the questions.</p>
          <p id="quiz-text-front"> ➡ Press "Next" to move forward.</p>
          <p id="quiz-text-front">⬅ Press "Previous" to go back.</p>
          <p id="quiz-text-front"> 📜Certificate will be generated only if you have scored 70% or more.</p>
          <p id="quiz-text-front">🎓 If you pass, a certificate will be generated.</p>
          <p id="quiz-text-front">📥 Scroll down to download it.</p>
          <p id="quiz-text-front"> ✅ Fill the checkbox and press continue to give quiz.</p>
          <label className="confirm-checkbox">
            <input
              type="checkbox"
              checked={confirmQuiz}
              onChange={() => setConfirmQuiz(!confirmQuiz)}
            />
            I confirm to give the quiz.
          </label>
          <center><button className="start-quiz-btn" onClick={() => setQuizStarted(true)} disabled={!confirmQuiz}>
            Continue
          </button></center>
        </div>
      ) : showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length} ({((score / questions.length) * 100).toFixed(2)}%)</h2>
          <div className="feedback-message">
            <p>{getFeedbackMessage()}</p>
          </div>

          <div className="report-card">
            <h3>📋 Report Card</h3>
            <p>📌 Total Questions: {questions.length}</p>
            <p>📝 Attempted Questions: {questions.length - skippedQuestions.length}</p>
            <p>✅ Correct Answers: {score}</p>
            <p>❌ Wrong Answers: {incorrectAnswers.length}</p>
            <p>⏭ Skipped Questions: {skippedQuestions.length}</p>
          </div>
          {((score / questions.length) * 100) >= 70 ? (
            <div className="congratulations-container">
              <h3>🎉 Congratulations! You Passed!</h3>
              <input
                type="text"
                className="name-input"
                placeholder="Enter your name for the certificate"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {userName && <Certificate name={userName} score={((score / questions.length) * 100).toFixed(2)} />}
            </div>
          ) : (
            <button className="retry-quiz" onClick={() => window.location.reload()}>
              🔄 Retry Quiz
            </button>
          )}
        </div>
      ) : (
        <div className="question-section">
          {questions[currentQuestion].image && (
            <img src={questions[currentQuestion].image} alt="Question" className="question-image" />
          )}
          <h2 className="question-text">{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className={selectedOptions[currentQuestion] === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="butt skip" onClick={handleSkipQuestion}>Skip</button>
          <div className="navigation-buttons">
            <button id="prev-btn" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button id="next-btn" onClick={handleNextQuestion}>
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Quiz;
