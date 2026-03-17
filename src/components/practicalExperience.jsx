import { useState } from "react";
import "../styles/practicalExperience.css";

function PracticalExp({ storePracticalForm, selectedEdu, setSelected, handleClose }) {
  const [practicalForm, setPracticalForm] = useState(selectedEdu || {
    companyName: "",
    positionTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  function handleCompanyName(e) {
    setPracticalForm({ ...practicalForm, companyName: e.target.value });
  }
  function handlePositionTitle(e) {
    setPracticalForm({ ...practicalForm, positionTitle: e.target.value });
  }
  function handleDescription(e) {
    setPracticalForm({ ...practicalForm, description: e.target.value });
  }
  function handleStartDate(e) {
    setPracticalForm({ ...practicalForm, startDate: e.target.value });
  }
  function handleEndDate(e) {
    setPracticalForm({ ...practicalForm, endDate: e.target.value });
  }

  function handleClickBtn(e) {
    e.preventDefault();
    storePracticalForm(practicalForm);
    setPracticalForm({
      companyName: "",
      positionTitle: "",
      description: "",
      startDate: "",
      endDate: "",
    });
    setSelected(null);
  }
  return (
    <>
      <h1>PracticalExp</h1>
      <form className="practical-exp">
        <label htmlFor="company-name" className="company-name">
          Company Name
        </label>
        <input
          type="text"
          name="company-name"
          id="company-name"
          autoComplete="on"
          onChange={handleCompanyName}
          value={practicalForm.companyName}
        />

        <label htmlFor="position-title" className="position-title">
          Position Title
        </label>
        <input
          type="text"
          name="position-title"
          id="position-title"
          autoComplete="on"
          onChange={handlePositionTitle}
          value={practicalForm.positionTitle}
        />

        <label htmlFor="description" className="description">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          autoComplete="on"
          onChange={handleDescription}
          value={practicalForm.description}
        />

        <label htmlFor="start-date" className="start-date">
          Start Date
        </label>
        <input
          type="date"
          name="start-date"
          id="start-date"
          autoComplete="on"
          onChange={handleStartDate}
          value={practicalForm.startDate}
        />
        <label htmlFor="end-date" className="end-date">
          End Date
        </label>
        <input
          type="date"
          name="end-date"
          id="end-date"
          autoComplete="on"
          onChange={handleEndDate}
          value={practicalForm.endDate}
        />

        <div className="btns">
          <button type="button" className="close-btn" onClick={handleClose}>
            Close
          </button>
          <button type="submit" className="submit-btn" onClick={handleClickBtn}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export { PracticalExp };
