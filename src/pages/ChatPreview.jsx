import React, { useEffect, useRef, useState } from "react";
import "./ChatPreview.css";
import { sampleChats, documents } from "../data/dummyData";

const ChatPreview = () => {
  const [messages, setMessages] = useState(sampleChats);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newMsg = { id: Date.now(), role: "user", text: trimmed };
    setMessages((m) => [...m, newMsg]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <button className="back-button">←</button>
        <h1 className="document-title">{documents[0]?.name || "Document"}</h1>
        <button className="menu-button">⋮</button>
      </header>

      <main className="chat-content">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`message-group ${m.role === "ai" ? "ai-message" : "user-message"}`}
          >
            {m.role === "ai" && (
              <>
                <div className="message-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#2196F3" />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="message-bubble ai-bubble">
                  <p className="message-text">{m.text}</p>
                  {m.quote && (
                    <div className="quote-box">
                      <p className="quote-text">{m.quote}</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {m.role === "user" && (
              <>
                <div className="message-bubble user-bubble">
                  <p className="message-text">{m.text}</p>
                </div>
                <div className="user-avatar">
                  <div className="avatar-circle"></div>
                </div>
              </>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </main>

      <footer className="chat-footer">
        <div className="input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            className="send-button"
            aria-label="Send message"
            onClick={handleSend}
          >
            <img src="/send.png" alt="Send" className="send-icon" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatPreview;
