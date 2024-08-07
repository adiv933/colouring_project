import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ColouringIndex from "./pages/ColouringIndex";
import Colouring from "./pages/Colouring";
import Guidance from "./pages/Guidance";
import UsefulLinks from "./pages/UsefulLinks";
import Library from "./pages/Library";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/colouring" element={<Colouring />} />
      <Route path="/colouringIndex" element={<ColouringIndex />} />
      <Route path="/guidance" element={<Guidance />} />
      <Route path="/links" element={<UsefulLinks />} />
      <Route path="/library" element={<Library />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
