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

  function handleFullName(e) {
    setFullName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
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
        />
        <EduInfo />
        <PracticalExp />
      </div>
      <Preview fullName={fullName} email={email} phoneNumber={phoneNumber} />
    </>
  );
}

export default App;
