import React from "react";
import { documents } from "../data/dummyData";

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      <p>Welcome to AskMyPDF — try one of these example documents:</p>
      <ul>
        {documents.map((d) => (
          <li key={d.id} style={{ margin: "8px 0" }}>
            <strong>{d.name}</strong> — {d.size} — uploaded {d.uploaded}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
