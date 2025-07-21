"use client";
import { useEffect, useState } from "react";

const ChatSimulator = () => {
  const exampleQueries = [
    "Top cafes near Indiranagar ☕",
    "Best thriller movies on Netflix 🎬",
    "Who won the IPL 2025? 🏆",
    "How's the weather in Bangalore today? 🌤️",
    "Can you recommend a good budget laptop? 💻",
  ];

  const binoReplies = [
    "Sure! Here's what I found 🔎",
    "Let me help you with that 💬",
    "Absolutely, check this out 👇",
    "Just a second... Found something interesting! 🧠",
    "Here's the most relevant info 📌",
    "Pulled some fresh data for you 📡",
    "This should help! ✅",
    "Interesting question! Here’s a quick answer ✨",
  ];

  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    const simulatedChats = exampleQueries.map((query) => ({
      user: query,
      bino: binoReplies[Math.floor(Math.random() * binoReplies.length)],
    }));
    setChatData(simulatedChats);
  }, []);

  return (
    <div className="chat-box">
      <h2>Try Bino (Simulated Chat)</h2>
      {chatData.map((chat, index) => (
        <div key={index} className="message">
          <div className="user">You: {chat.user}</div>
          <div className="bot">Bino: {chat.bino}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatSimulator;
