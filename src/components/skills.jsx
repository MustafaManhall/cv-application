import { useState } from "react";
import "../styles/skills.css";

function Skills({ storeSkill, handleClose }) {
  const [skill, setSkill] = useState("");

  function handleSkill(e) {
    setSkill(e.target.value);
  }
  function handleClickBtn(e) {
    e.preventDefault();
    storeSkill(skill);
    setSkill(null);
  }
  return (
    <form className="skills">
      <div className="form-group">
        <label htmlFor="add-skill">Skills</label>
        <input
          type="text"
          name="add-skill"
          id="add-skill"
          placeholder="Figma"
          autoComplete="on"
          onChange={handleSkill}
          value={skill}
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

export { Skills };
