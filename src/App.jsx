import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Results from "./pages/Results";
import Processing from "./pages/Processing";
import ChatPreview from "./pages/ChatPreview";
import Summary from "./pages/Summary";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/results" element={<Results />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/chat" element={<ChatPreview />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
