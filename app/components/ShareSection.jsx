"use client";

import { useRouter } from 'next/navigation';

const ShareSection = () => {
  const message = encodeURIComponent(
    "I just asked Bino my burning question on WhatsApp! 🔥 Try it: https://wa.me/919800081110"
  );

  const router = useRouter();
  const quiz = () => {
    router.push("/quiz");
  }

  return (
    <div className="button-row">
  <a href="https://api.whatsapp.com/send/?phone=919800081110&text=Hello%21-https%3A%2F%2Fbino.bot%2F&type=phone_number&app_absent=0" className="share-button" target="_blank">Share on WhatsApp</a>
  <button className="quiz-button" onClick={quiz}>Take the Quiz</button>
</div>
  );
};

export default ShareSection;
