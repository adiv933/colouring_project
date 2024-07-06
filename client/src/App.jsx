import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ColoringIndex from "./pages/ColoringIndex";
import Instructions from "./pages/Instructions";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/coloring" element={<ColoringIndex />} />
      <Route path="/instructions" element={<Instructions />} />
    </Routes>
  );
};

export default App;
