import ChatSimulator from "./components/ChatSimulator";
import ShareSection from "./components/ShareSection";

export default function Home() {
  return (
    <>
    <div className="container">
  <h1 className="bino-title">
    Ask Bino <span role="img" aria-label="phone">📱</span><span role="img" aria-label="search">🔍</span>
  </h1>

  <h3 className="bino-subtitle">
    <span className="highlight">Search smarter</span>, directly from WhatsApp. <br />
    Just message your question and <span className="highlight">Bino replies instantly</span>!
  </h3>
      <ChatSimulator />
      <ShareSection />
    </div>
    </>
  );
}
