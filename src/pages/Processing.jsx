import React, { useEffect } from "react";
import "./Processing.css";
import { useNavigate, useLocation } from "react-router-dom";

const Step = ({ status, text }) => {
  return (
    <div className={`process-step ${status}`}>
      <span className="step-icon">
        {status === "done" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" fill="#d7eafc" />
            <path
              d="M8 12.5L10.5 15L16 9.5"
              stroke="#1573e6"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : status === "active" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="#cfe6ff"
              strokeWidth="3"
              fill="#fff"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="#b6d7fb"
              strokeWidth="2"
              fill="#1573e6"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="#e6eef7"
              strokeWidth="2"
              fill="#fff"
            />
          </svg>
        )}
      </span>
      <span className="step-text">{text}</span>
    </div>
  );
};

const Processing = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/chat"); // route to ChatPreview.jsx
    }, 10000); // Navigate to chat after 10 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="processing-page">
      <header className="processing-header">Processing</header>

      <main className="processing-main">
        <div className="spinner" aria-hidden></div>

        <h2 className="processing-title">
          Teaching your document{"\n"}how to talk...
        </h2>
        <p className="processing-sub">
          Please wait while we process your
          <br />
          document. This should only take a few
          <br />
          moments.
        </p>

        <div className="steps">
          <Step status="done" text="Extracting text..." />
          <Step status="done" text="Splitting into chunks..." />
          <Step status="active" text="Embedding into Pinecone..." />
        </div>
      </main>

      <nav className="bottom-nav">
        <button className="nav-btn active" onClick={() => navigate("/upload")}>
          <div className="nav-icon">📤</div>
          <div className="nav-label">Upload</div>
        </button>
        <button className="nav-btn" onClick={() => navigate("/ask")}>
          <div className="nav-icon">💬</div>
          <div className="nav-label">Chat</div>
        </button>
        <button className="nav-btn" onClick={() => navigate("/results")}>
          <div className="nav-icon">⚙️</div>
          <div className="nav-label">Settings</div>
        </button>
      </nav>
    </div>
  );
};

export default Processing;
