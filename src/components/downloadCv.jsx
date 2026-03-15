import html2pdf from "html2pdf.js";
import "../styles/downloadCv.css";

function DownloadCv({ cvRef, setPrinting }) {
  async function handleDownload() {
    setPrinting(true);
    const element = cvRef.current;
    await html2pdf().from(element).save();
    setPrinting(false);
  }

  return (
    <button className="downloadBtn" onClick={handleDownload}>
      Download Cv
    </button>
  );
}

export { DownloadCv };
