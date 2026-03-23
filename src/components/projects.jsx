import { useState } from "react";
import "../styles/projects.css";

function Projects({ storeProjectData, selected, setSelected, handleClose }) {
  const [formData, setFormData] = useState( selected.pro || {
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  function handleProjectName(e) {
    setFormData({ ...formData, projectName: e.target.value });
  }
  function handleDescription(e) {
    setFormData({ ...formData, description: e.target.value });
  }
  function handleStartDate(e) {
    setFormData({ ...formData, startDate: e.target.value });
  }
  function handleEndDate(e) {
    setFormData({ ...formData, endDate: e.target.value });
  }
  function handleClickBtn(e) {
    e.preventDefault();
    storeProjectData(formData);
    setFormData({
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  setSelected({...selected, pro: null});
  }
  return (
    <form className="project-info">
      <div className="form-group">
        <label htmlFor="project-name" className="project-name">
          Project Name
        </label>
        <input
          type="text"
          name="project-name"
          id="project-name"
          autoComplete="on"
          placeholder="Website project"
          onChange={handleProjectName}
          value={formData.projectName}
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
          placeholder="Describe your project..."
          autoComplete="on"
          onChange={handleDescription}
          value={formData.description}
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

export { Projects };
