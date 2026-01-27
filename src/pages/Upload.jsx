import React, { useRef, useState } from "react";
import "./Upload.css";
import { useNavigate } from "react-router-dom";
import { documents } from "../data/dummyData";

const Upload = () => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const onButtonClick = () => inputRef.current && inputRef.current.click();

  const handleFiles = (files) => {
    if (!files || !files[0]) return;
    const f = files[0];
    setFileName(f.name);
    // navigate to processing page and pass file name in state
    navigate("/processing", { state: { name: f.name } });
    // Clear file input and fileName after navigation for mobile compatibility
    setTimeout(() => {
      setFileName("");
      if (inputRef.current) inputRef.current.value = "";
    }, 500);
  };

  const onChange = (e) => handleFiles(e.target.files);
  const onDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };
  const onDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="upload-page">
      <header className="upload-header">Upload Document</header>

      <main className="upload-main">
        <h1 className="upload-title">
          <span className="mobile-title">
            Upload your PDF.
            <br />
            Ask anything.
          </span>
          <span className="desktop-title">
            Upload your PDF. Ask
            <br />
            anything.
          </span>
        </h1>

        <section
          className={`dropzone ${dragActive ? "active" : ""}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="dropzone-inner">
            <svg
              className="doc-icon"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3H6C4.895 3 4 3.895 4 5V19C4 20.105 4.895 21 6 21H18C19.105 21 20 20.105 20 19V9L14 3Z"
                stroke="#A0A8B3"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 3V9H20"
                stroke="#A0A8B3"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11V16"
                stroke="#A0A8B3"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 13.5L12 11L14.5 13.5"
                stroke="#A0A8B3"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="upload-text">
              <button
                type="button"
                className="upload-link"
                onClick={onButtonClick}
              >
                Click to upload
              </button>
              <span className="muted"> or drag and drop</span>
            </p>

            <p className="small-muted">PDF (MAX. 10MB)</p>

            {fileName && <p className="file-name">Selected: {fileName}</p>}

            <button
              className="primary-btn"
              type="button"
              onClick={onButtonClick}
            >
              Upload File
            </button>

            <input
              ref={inputRef}
              type="file"
              accept="application/pdf,application/acrobat,application/x-pdf,application/vnd.pdf,application/vnd.adobe.pdf,.pdf"
              className="file-input"
              onChange={onChange}
            />
          </div>
        </section>
      </main>

      <footer className="upload-footer">
        <button className="start-btn" onClick={() => navigate("/chat")}>
          Start Chatting
        </button>
      </footer>
    </div>
  );
};

export default Upload;
