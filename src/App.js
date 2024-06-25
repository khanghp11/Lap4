import React, { useState } from 'react';
import Question from './question';
import Score from './score';
import './App.css';

const App = () => {
  const quizData = [
    {
      question: '2 + 3 = ?',
      answers: ['5', '3', '7'],
      correctAnswer: '5'
    },
    {
      question: '1 x 1 = ?',
      answers: ['2', '0.5', '1'],
      correctAnswer: '1'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const checkAnswers = () => {
    let newScore = score;
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      newScore++;
    }
    setScore(newScore);
    setSelectedAnswer(null);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizEnd(true);
    }
  };

  const handleNextOrSubmit = () => {
    if (currentQuestion === quizData.length - 1) {
      checkAnswers();
    } else {
      nextQuestion();
    }
  };

  if (quizEnd) {
    return <Score score={score} />;
  }

  const currentQuestionData = quizData[currentQuestion];

  return (
    <div>
      <h1>{`Question ${currentQuestion + 1}`}</h1> {/* Sử dụng template string để hiển thị số câu hỏi */}
      <Question
        question={currentQuestionData.question}
        answers={currentQuestionData.answers}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
      />
      <button onClick={handleNextOrSubmit} className='bt'>
        {currentQuestion === quizData.length - 1 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default App;
