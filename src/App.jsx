import { EduInfo } from "./components/eduInfo";
import { PersonalInfo } from "./components/personalInfo";
import { PracticalExp } from "./components/practicalExperience";
import { Preview } from "./components/preview";
import { useState } from "react";
import "./styles/App.css";

function App() {

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [formData, setFormData] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    eduLocation: "",
  });

  const [practicalForm, setPracticalForm] = useState({
    companyName: "",
    positionTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  function handleFullName(e) {
    setPersonalInfo({ ...personalInfo, fullName: e.target.value });
  }
  function handleEmail(e) {
    setPersonalInfo({ ...personalInfo, email: e.target.value });
  }
  function handlePhoneNumber(e) {
    setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value });
  }
  function handleLocation(e) {
    setPersonalInfo({ ...personalInfo, location: e.target.value });
  }

  function handleEduInfo(formData) {
    setFormData({
      schoolName: formData.schoolName,
      degree: formData.degree,
      startDate: formData.startDate,
      endDate: formData.endDate,
      eduLocation: formData.eduLocation,
    });
  }
  function handlePracticalForm (practicalData) {
    setPracticalForm({
      companyName: practicalData.companyName,
      positionTitle: practicalData.positionTitle,
      description: practicalData.description,
      startDate: practicalData.startDate,
      endDate: practicalData.endDate
    });
  }

  return (
    <>
      <div>
        <PersonalInfo
          personalInfo={personalInfo}
          handleFullName={handleFullName}
          handleEmail={handleEmail}
          handlePhoneNumber={handlePhoneNumber}
          handleLocation={handleLocation}
        />
        <EduInfo storeFormData={handleEduInfo} data={formData} />
        <PracticalExp storePracticalForm={handlePracticalForm} data={practicalForm} />
      </div>
      <Preview
        personalInfo={personalInfo}
        formData={formData}
        practicalData={practicalForm}
      />
    </>
  );
}

export default App;
