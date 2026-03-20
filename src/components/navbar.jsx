import html2pdf from "html2pdf.js";
import "../styles/navbar.css";

function Navbar({ cvRef, activeTab }) {

  function handleDownload() {
    const element = cvRef.current;
    html2pdf().from(element).save();
  }

  return (
    <nav>
      <div className={`sidebar-header ${activeTab === "edit" ? "active" : ""}`}>
        <h1>CV Builder</h1>
        <p>Fill in your details on the left</p>
      </div>
      <div className={`preview-header ${activeTab === "preview" ? "active" : ""}`}>
        <h2>Live Preview</h2>
        <button className="downloadBtn" onClick={handleDownload}>
          Download Cv
        </button>
      </div>
    </nav>
  );
}

export { Navbar };
