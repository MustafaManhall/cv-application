import { useState } from "react";
import "../styles/certificates.css";

function Certificates({
  storeCertificatesData,
  selected,
  setSelected,
  handleClose,
}) {
  const [certificates, setCertificates] = useState(
    selected.cer || {
      certificateTitle: "",
      certificateNumber: "",
      description: "",
      date: "",
    },
  );
  function handleCertificatesTitle(e) {
    setCertificates({ ...certificates, certificateTitle: e.target.value });
  }
  function handleCertificatesNumber(e) {
    setCertificates({ ...certificates, certificateNumber: e.target.value });
  }
  function handleDescription(e) {
    setCertificates({ ...certificates, description: e.target.value });
  }
  function handleDate(e) {
    setCertificates({ ...certificates, date: e.target.value });
  }
  function handleClickBtn(e) {
    e.preventDefault();
    storeCertificatesData(certificates);
    setCertificates({
      certificateTitle: "",
      certificateNumber: "",
      description: "",
      date: "",
    });
    setSelected({ ...selected, cer: null });
  }
  return (
    <form className="certificates">
      <div className="form-group">
        <label htmlFor="title" className="title">
          Certificate Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          autoComplete="on"
          placeholder="Google Internship"
          onChange={handleCertificatesTitle}
          value={certificates.certificateTitle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number" className="number">
          Certificate Number
        </label>
        <input
          type="text"
          name="number"
          id="number"
          autoComplete="on"
          placeholder="2041"
          onChange={handleCertificatesNumber}
          value={certificates.certificateNumber}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="description">
          Description
        </label>
        <textarea
          type="text"
          name="description"
          id="description"
          autoComplete="on"
          placeholder="Describe your certification, issuing organization, and date..."
          onChange={handleDescription}
          value={certificates.description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date" className="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          autoComplete="on"
          onChange={handleDate}
          value={certificates.date}
        />
      </div>
      <div className="btns">
        <button type="button" className="btn btn-outline" onClick={handleClose}>
          Close
        </button>
        <button
          type="submit"
          className="btn btn-outline"
          onClick={handleClickBtn}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { Certificates };
