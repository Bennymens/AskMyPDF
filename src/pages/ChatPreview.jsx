import React, { useState } from "react";
import "./ChatPreview.css";

const ChatPreview = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello! I'm your document assistant.",
    },
    {
      id: 2,
      role: "assistant-quote",
      text: "“This is a quoted excerpt from your document.”",
    },
    {
      id: 3,
      role: "user",
      text: "How do I teach my document to talk?",
    },
    {
      id: 4,
      role: "assistant",
      text: "You can start by feeding it text and using our AI model to generate responses.",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        role: "user",
        text: trimmed,
      },
    ]);
    setInputValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-preview-container">
      {/* Header */}
      <div className="chat-header">
        <svg
          className="icon back-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="14" x2="6" y2="14" />
          <polyline points="12 8 6 14 12 20" />
        </svg>
        <span className="chat-filename">Annual_Report_2023.pdf</span>
        <svg
          className="icon menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>

      {/* Chat messages */}
      <div className="chat-messages">
        {messages.map((msg) => {
          if (msg.role === "assistant") {
            return (
              <div key={msg.id} className="message assistant-message">
                <span className="robot-avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <circle cx="18" cy="18" r="18" fill="#eaf2fb" />
                    <g>
                      <rect
                        x="11"
                        y="16"
                        width="14"
                        height="8"
                        rx="3"
                        fill="#1573e6"
                      />
                      <circle cx="15.5" cy="20" r="1.5" fill="#fff" />
                      <circle cx="20.5" cy="20" r="1.5" fill="#fff" />
                      <rect
                        x="15"
                        y="12"
                        width="6"
                        height="3"
                        rx="1.5"
                        fill="#1573e6"
                      />
                    </g>
                  </svg>
                </span>
                <div className="message-text">{msg.text}</div>
              </div>
            );
          } else if (msg.role === "assistant-quote") {
            return (
              <div key={msg.id} className="message assistant-quote-message">
                <div className="quote-text">{msg.text}</div>
              </div>
            );
          } else {
            // Special handling for the specific user message
            const isOneLine =
              msg.text === "How do I teach my document to talk?";
            return (
              <div key={msg.id} className="message user-message">
                <div
                  className={`message-text${isOneLine ? " one-line-desktop" : ""}`}
                >
                  {msg.text}
                </div>
                <span className="user-avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <circle cx="18" cy="18" r="18" fill="#e6f0fa" />
                    <g>
                      <circle cx="18" cy="15" r="6" fill="#1573e6" />
                      <rect
                        x="10"
                        y="24"
                        width="16"
                        height="6"
                        rx="3"
                        fill="#1573e6"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            );
          }
        })}
      </div>

      {/* Input bar */}
      <div className="chat-input-bar">
        <input
          type="text"
          placeholder="Ask a question...."
          className="chat-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button className="send-button" onClick={handleSend}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 28 28"
          >
            <polygon points="5 4 25 14 5 24 9 14 5 4" />
            <line x1="5" y1="14" x2="25" y2="14" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatPreview;
