import React from 'react';

const Question = ({ question, answers, selectedAnswer, onAnswerSelect, onNext }) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul className='answer-container'>
        {answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => onAnswerSelect(answer)}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
