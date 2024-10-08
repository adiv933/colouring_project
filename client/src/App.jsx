import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Colouring from "./pages/Colouring";
import Guidance from "./pages/Guidance";
import Readings from "./pages/Readings";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import PdfViewer from "./pages/PdfViewer";
import Gallery from "./pages/Gallery";
import ErrorFinding from "./pages/ErrorFinding";

import Colouring1 from "./pages/Colouring1";
import Colouring2 from "./pages/Colouring2";
import Colouring3 from "./pages/Colouring3";
import Colouring4 from "./pages/Colouring4";
import Colouring5 from "./pages/Colouring5";

const App = () => {
  useEffect(() => {
    localStorage.setItem("score1", 0);
    localStorage.setItem("score2", 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/guidance" element={<Guidance />} />
      <Route path="/library" element={<Library />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/view-presentation"
        element={<PdfViewer url="/pdfs/presentation.pdf" />}
      />

      <Route path="/colourings" element={<Colouring />} />
      <Route path="colouring1" element={<Colouring1 />} />
      <Route path="colouring2" element={<Colouring2 />} />
      <Route path="colouring3" element={<Colouring3 />} />
      <Route path="colouring4" element={<Colouring4 />} />
      <Route path="colouring5" element={<Colouring5 />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="errors" element={<ErrorFinding />} />

      <Route path="/readings" element={<Readings />} />
      <Route
        path="/readings/article1"
        element={
          <PdfViewer url="/pdfs/On-Mothers-flag-and-symbol-Gilles-Auroville-Archives.pdf" />
        }
      />
      <Route path="/*" element={<Landing />} />
    </Routes>
  );
};

export default App;
