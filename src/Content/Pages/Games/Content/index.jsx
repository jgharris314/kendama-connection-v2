import { Routes, Route } from "react-router-dom";
import Open from "./Pages/Open";
import Ken from "./Pages/Ken";
import Freestyle from "./Pages/Freestyle";
import SpeedLadder from "./Pages/SpeedLadder";

export default function Content() {
  return (
    <div className="flex md:flex-col bg-green-50 h-screen overflow-hidden">
      Words
      <Routes>
        <Route path="open" element={<Open />} />
        <Route path="ken" element={<Ken />} />
        <Route path="freestyle" element={<Freestyle />} />
        <Route path="speedladder" element={<SpeedLadder />} />
      </Routes>
    </div>
  );
}
