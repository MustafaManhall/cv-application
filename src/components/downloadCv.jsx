import html2pdf from "html2pdf.js";
import "../styles/downloadCv.css";

function DownloadCv({ cvRef }) {
  function handleDownload() {
    const element = cvRef.current;
    html2pdf().from(element).save();
  }

  return (
    <div className="preview-header">
      <h2>Live Preview</h2>
      <button className="downloadBtn" onClick={handleDownload}>
        Download Cv
      </button>
    </div>
  );
}

export { DownloadCv };
