import React, { useState } from "react";
import "./Summary.css";

const Summary = () => {
  const [expandedSections, setExpandedSections] = useState({
    short: false,
    long: false,
    sectionWise: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="summary-container">
      <header className="summary-header">
        <button className="summary-back-button" aria-label="Go back">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="summary-title">Summary</h1>
      </header>

      <div className="summary-content">
        <div className="summary-chat-bubble-row">
          <div className="summary-avatar"></div>
          <div className="summary-chat-bubble">
            Here's a summary of the document you uploaded:
          </div>
        </div>

        <div className="summary-sections">
          <div className="summary-section">
            <button
              className="summary-section-header"
              onClick={() => toggleSection("short")}
              aria-expanded={expandedSections.short}
            >
              <h2 className="summary-section-title">
                <strong>Short Summary</strong>
              </h2>
              <svg
                className={`summary-chevron${expandedSections.short ? " summary-chevron-expanded" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {expandedSections.short && (
              <div className="summary-section-content">
                {/* Content for short summary */}
              </div>
            )}
          </div>

          <div className="summary-section">
            <button
              className="summary-section-header"
              onClick={() => toggleSection("long")}
              aria-expanded={expandedSections.long}
            >
              <h2 className="summary-section-title">
                <strong>Long Summary</strong>
              </h2>
              <svg
                className={`summary-chevron${expandedSections.long ? " summary-chevron-expanded" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {expandedSections.long && (
              <div className="summary-section-content">
                {/* Content for long summary */}
              </div>
            )}
          </div>

          <div className="summary-section">
            <button
              className="summary-section-header"
              onClick={() => toggleSection("sectionWise")}
              aria-expanded={expandedSections.sectionWise}
            >
              <h2 className="summary-section-title">
                <strong>Section-wise Breakdown</strong>
              </h2>
              <svg
                className={`summary-chevron${expandedSections.sectionWise ? " summary-chevron-expanded" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {expandedSections.sectionWise && (
              <div className="summary-section-content">
                {/* Content for section-wise breakdown */}
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="summary-footer">
        <div className="summary-input-bar">
          <div className="summary-avatar-small"></div>
          <input
            type="text"
            className="summary-input"
            placeholder="Ask a question..."
            onFocus={() => (window.location.href = "/chat")}
            readOnly
            style={{ cursor: "pointer", background: "#f5f5f7", color: "#222" }}
          />
          <button
            className="summary-send-button"
            aria-label="Go to chat"
            onClick={() => (window.location.href = "/chat")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Summary;
