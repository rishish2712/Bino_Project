'use client'

import React, { useState } from "react";
import questions from "./questions";
import {
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon
} from "react-share";

const QuizApp = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handleOptionClick = (option) => {
    if (option === questions[step].answer) {
      setScore(score + 1);
    }

    if (step === questions.length - 1) {
      alert("Thanks for completing the quiz! Redirecting to the Bino homepage...");
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setScore(0);
    setStart(false);
  };

  if (!start) {
    return (
      <div className="quiz-container">
        <div className="quiz-box">
          <h1>Welcome to the Bino Awareness Quiz!</h1>
          <p>Let's explore what Bino is and how it works.</p>
          <button className="option-button" onClick={handleStart}>Start Quiz</button>
        </div>
      </div>
    );
  }

  if (step === questions.length) {
    return (
      <div className="quiz-container">
        <div className="quiz-box">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <p>Ready to explore Bino?</p>
          <button className="option-button" onClick={() => window.location.href = "https://bino.bot"}>
            Visit Bino
          </button>
          <br /><br />
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <a href="https://api.whatsapp.com/send/?phone=919800081110&text=Hello%21-https%3A%2F%2Fbino.bot%2F&type=phone_number&app_absent=0" target="_blank">
              <WhatsappIcon size={32} round />
            </a>
            <a href="https://www.linkedin.com/company/boni1/" target="_blank">
              <LinkedinIcon size={32} round />
            </a>
             <a href="https://www.facebook.com/people/Bino/100083924344406/" target="_blank" >
              <FacebookIcon size={32} round />
            </a>
          </div>
          <br />
          <button className="option-button" onClick={handleRestart}>Retake Quiz</button>
          <button  className="option-button" onClick={() => window.location.href="/"}>Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h2>Question {step + 1}</h2>
        <p>{questions[step].question}</p>
        {questions[step].options.map((option, idx) => (
          <button
            className="option-button"
            key={idx}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizApp;
