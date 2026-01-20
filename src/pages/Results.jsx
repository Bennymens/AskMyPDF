import React from "react";
import { results } from "../data/dummyData";

const Results = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Results</h1>
      <p>View the results of your queries.</p>
      <ul>
        {results.map((r) => (
          <li key={r.id} style={{ margin: "10px 0" }}>
            <strong>{r.title}</strong> — {r.excerpt} <em>(page {r.page})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
