import { useState } from "react";
import "../styles/languages.css";

function Languages({ storeLanguage, handleClose }) {
  const [languageForm, setLanguageForm] = useState({
    language: "",
    proficiency: "",
  });

  function handleLanguage(e) {
    setLanguageForm({...languageForm, language: e.target.value});
  }
  function handleProficiency(e) {
    setLanguageForm({...languageForm, proficiency: e.target.value});
  }
  function handleClickBtn(e) {
    e.preventDefault();
    storeLanguage(languageForm);
    setLanguageForm(null);
  }
  return (
    <form className="languages">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="add-language">Language</label>
          <input
            type="text"
            name="add-language"
            id="add-language"
            autoComplete="on"
            onChange={handleLanguage}
            value={languageForm.language}
          />
        </div>
        <div className="form-group">
          <label htmlFor="add-proficiency">Proficiency Level</label>
          <select
            name="add-proficiency"
            id="add-proficiency"
            onChange={handleProficiency}
            value={languageForm.proficiency}
          >
            <option value="Native">Native</option>
            <option value="Fluent">Fluent</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Beginner">Beginner</option>
          </select>
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

export { Languages };
