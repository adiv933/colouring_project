import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Colouring1 from "./pages/Colouring1";
import Colouring2 from "./pages/Colouring2";
import Colouring3 from "./pages/Colouring3";
import Colouring4 from "./pages/Colouring4";
import Colouring5 from "./pages/Colouring5";
import Colouring from "./pages/Colouring";
import Guidance from "./pages/Guidance";
import UsefulLinks from "./pages/UsefulLinks";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import PdfViewer from "./pages/PdfViewer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/colourings" element={<Colouring />} />
      <Route path="/colouring1" element={<Colouring1 />} />
      <Route path="/colouring2" element={<Colouring2 />} />
      <Route path="/colouring3" element={<Colouring3 />} />
      <Route path="/colouring4" element={<Colouring4 />} />
      <Route path="/colouring5" element={<Colouring5 />} />
      <Route path="/guidance" element={<Guidance />} />
      <Route path="/links" element={<UsefulLinks />} />
      <Route path="/library" element={<Library />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/view-pdf" element={<PdfViewer />} />
      <Route path="/*" element={<Landing />} />
    </Routes>
  );
};

export default App;
