"use client";

const ShareSection = () => {
  const message = encodeURIComponent(
    "I just asked Bino my burning question on WhatsApp! 🔥 Try it: https://wa.me/919800081110"
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
      <h3 style={{marginTop:"-10px"}}>Spread the word 📣</h3>
      <a
        href={`https://api.whatsapp.com/send/?phone=919800081110&text=Hello%21-https%3A%2F%2Fbino.bot%2F&type=phone_number&app_absent=0`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
      >
        Share on WhatsApp
      </a>
  <button
    style={{
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    }}
    onClick={() => {
      // You can redirect to your quiz page here, e.g.:
      window.location.href = "/quiz";
    }}
  >
    Take the Quiz
  </button>
</div>
  );
};

export default ShareSection;
