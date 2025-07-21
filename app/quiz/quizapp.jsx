'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  {
    question: "What do you mostly search for?",
    options: [
      { text: "Best food nearby", value: "foodie" },
      { text: "Quick help & repairs", value: "fixer" },
      { text: "Travel or hotels", value: "explorer" }, // Index 2
      { text: "Everything random", value: "curious" },
    ],
  },
  {
    question: "When do you usually need answers?",
    options: [
      { text: "Late at night", value: "fixer" },
      { text: "On weekends", value: "explorer" },
      { text: "During lunch", value: "foodie" }, // Index 2
      { text: "Anytime", value: "curious" },
    ],
  },
  {
    question: "How do you describe your search style?",
    options: [
      { text: "I want fast results", value: "fixer" },
      { text: "I love discovering new places", value: "explorer" },
      { text: "I try all food deals!", value: "foodie" }, // Index 2
      { text: "I ask anything anytime", value: "curious" },
    ],
  },
];

const results = {
  foodie: {
    title: "The Foodie Scout 🍲",
    desc: "You’re always on the lookout for the yummiest spots. Bino is your food finding friend!",
  },
  fixer: {
    title: "The Fast Fixer 🛠️",
    desc: "You want all the solutions, fast. Bino knows just the right person for any job.",
  },
  explorer: {
    title: "The Fun Explorer 🧳",
    desc: "Ready for the next adventure! Bino gets your travel, hotels or event plans sorted.",
  },
  curious: {
    title: "The Curious Cat 😺",
    desc: "No question too weird for you! Bino is ready for your wildest searches.",
  },
};

export default function BinoQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const handleOptionClick = (value) => {
    // If user selects third option (index 2), show alert and redirect
    if (step === 2) {
      alert("Thanks for your interest! Redirecting you to the Bino homepage...");
      router.push('/');
      return;
    }

    setAnswers([...answers, value]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  if (step < questions.length) {
    return (
      <main style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif", padding: 24 }}>
        <h1 style={{ fontWeight: 700, fontSize: 28 }}>Why You are use Bino?</h1>
        <div style={{ margin: "2rem 0" }}>
          <h2>{questions[step].question}</h2>
          {questions[step].options.map((opt, i) => (
            <button
              key={i}
              style={{
                display: "block",
                width: "100%",
                padding: "1rem",
                margin: "1rem 0",
                borderRadius: 8,
                border: "1px solid #ccc",
                background: "#f9f9f9",
                fontSize: 18,
                cursor: "pointer",
              }}
              onClick={() => handleOptionClick(step)}
            >
              {opt.text}
            </button>
          ))}
        </div>
        <small>Step {step + 1} of {questions.length}</small>
      </main>
    );
  } 
}
