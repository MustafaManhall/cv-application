import { useState } from "react";
import "../styles/eduInfo.css";

function EduInfo({ storeFormData, selectedEdu, setSelected, handleClose }) {
  const [formData, setFormData] = useState(
    selectedEdu || {
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      eduLocation: "",
    },
  );

  function handleSchoolName(e) {
    setFormData({ ...formData, schoolName: e.target.value });
  }
  function handleDegree(e) {
    setFormData({ ...formData, degree: e.target.value });
  }
  function handleStartDate(e) {
    setFormData({ ...formData, startDate: e.target.value });
  }
  function handleEndDate(e) {
    setFormData({ ...formData, endDate: e.target.value });
  }
  function handleEduLocation(e) {
    setFormData({ ...formData, eduLocation: e.target.value });
  }
  function handleClickBtn(e) {
    e.preventDefault();
    storeFormData(formData);
    setFormData({
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      eduLocation: "",
    });
    setSelected(null);
  }

  return (
    <form className="edu-info">
      <div className="form-group">
        <label htmlFor="school-name" className="school-name">
          School Name
        </label>
        <input
          type="text"
          name="school-name"
          id="school-name"
          autoComplete="on"
          onChange={handleSchoolName}
          value={formData.schoolName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="degree" className="degree">
          Degree
        </label>
        <input
          type="text"
          name="degree"
          id="degree"
          autoComplete="on"
          onChange={handleDegree}
          value={formData.degree}
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
            value={formData.startDate}
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
            value={formData.endDate}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="location" className="location">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          autoComplete="on"
          onChange={handleEduLocation}
          value={formData.eduLocation}
        />
      </div>
      <div className="btns">
        <button type="button" className="btn btn-outline" onClick={handleClose}>
          Close
        </button>
        <button type="submit" className="btn btn-outline" onClick={handleClickBtn}>
          Submit
        </button>
      </div>
    </form>
  );
}

export { EduInfo };
