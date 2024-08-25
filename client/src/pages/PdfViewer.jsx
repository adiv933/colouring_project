import { useLocation } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page"), 10);

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    defaultScale: 1.5,
  });

  return (
    <div className="min-h-screen w-full bg-gradient flex items-center justify-center">
      <div className="bg-gradient p-4 shadow-lg rounded-lg w-full h-screen">
        <Worker
          // eslint-disable-next-line no-undef
          workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`}
        >
          <Viewer
            fileUrl="/presentation.pdf"
            plugins={[defaultLayoutPluginInstance]}
            initialPage={page ? page - 1 : 0}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;
