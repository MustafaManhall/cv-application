import { useState } from "react";
import "../styles/practicalExperience.css";

function PracticalExp({
  storePracticalForm,
  selectedExp,
  setSelected,
  handleClose,
}) {
  const [practicalForm, setPracticalForm] = useState(
    selectedExp || {
      companyName: "",
      positionTitle: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  );

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
    <form className="practical-exp">
      <div className="form-group">
        <label htmlFor="company-name" className="company-name">
          Company Name
        </label>
        <input
          type="text"
          name="company-name"
          id="company-name"
          autoComplete="on"
          placeholder="Google"
          onChange={handleCompanyName}
          value={practicalForm.companyName}
        />
      </div>

      <div className="form-group">
        <label htmlFor="position-title" className="position-title">
          Position Title
        </label>
        <input
          type="text"
          name="position-title"
          id="position-title"
          placeholder="Backend Developer"
          autoComplete="on"
          onChange={handlePositionTitle}
          value={practicalForm.positionTitle}
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
          placeholder="Describe your responsibilities and achievements..."
          autoComplete="on"
          onChange={handleDescription}
          value={practicalForm.description}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
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
        </div>
        <div className="form-group">
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
        </div>
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

export { PracticalExp };
