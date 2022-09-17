import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Games from "./Pages/Games";

export default function Content() {
  return (
    <div className="flex md:flex-col md:w-5/6 bg-green-50 overflow-scroll p-6 md:p-8">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}
