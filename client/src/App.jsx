import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Coloring from "./pages/Coloring";
import Instructions from "./pages/Instructions";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/coloring" element={<Coloring />} />
      <Route path="/instructions" element={<Instructions />} />
    </Routes>
  );
};

export default App;
