import ChatSimulator from "./components/ChatSimulator";
import ShareSection from "./components/ShareSection";

export default function Home() {
  return (
    <>
    <div className="container">
      <h1>Ask Bino 📱🔍</h1>
      <h3 style={{ textDecorationLine:"underline", textAlign:"center", fontSize:"28px"}}>
        Search smarter, directly from WhatsApp.<br/> Just message your question and Bino replies instantly!
      </h3>
      <ChatSimulator />
      <ShareSection />
    </div>
    </>
  );
}
