import { EduInfo } from "./components/eduInfo";
import { PersonalInfo } from "./components/personalInfo";
import { PracticalExp } from "./components/practicalExperience";
import { Preview } from "./components/preview";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const [formData, setFormData] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    eduLocation: "",
  });

  function handleFullName(e) {
    setFullName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleLocation(e) {
    setLocation(e.target.value);
  }

  function handleEduInfo(formData) {
    setFormData({
      schoolName: formData.schoolName,
      degree: formData.degree,
      startDate: formData.startDate,
      endDate: formData.endDate,
      eduLocation: formData.eduLocation
    });
  }
  return (
    <>
      <div>
        <PersonalInfo
          fullName={fullName}
          handleFullName={handleFullName}
          email={email}
          handleEmail={handleEmail}
          phoneNumber={phoneNumber}
          handlePhoneNumber={handlePhoneNumber}
          location={location}
          handleLocation={handleLocation}
        />
        <EduInfo
          storeFormData={handleEduInfo}
          data={formData}
        />
        <PracticalExp />
      </div>
      <Preview
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        location={location}
        formData={formData}
      />
    </>
  );
}

export default App;
