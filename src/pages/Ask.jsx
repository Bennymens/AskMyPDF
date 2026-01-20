import React from "react";
import { sampleChats } from "../data/dummyData";

const Ask = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Ask Questions</h1>
      <p>Ask questions about your PDF. Example conversation:</p>
      <ul>
        {sampleChats.map((c) => (
          <li key={c.id} style={{ margin: "8px 0" }}>
            <strong>{c.role === "ai" ? "Assistant" : "You"}:</strong> {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ask;
