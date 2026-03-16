import { useState } from "react";
import "../styles/eduInfo.css";

function EduInfo({ storeFormData, selectedEdu, setSelected }) {
  const [formData, setFormData] = useState( selectedEdu || {
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    eduLocation: "",
  });

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
    <>
      <h1>EduInfo</h1>
      <form className="edu-info">
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
        <div className="btns">
          <button type="submit" className="submit-btn" onClick={handleClickBtn}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export { EduInfo };
