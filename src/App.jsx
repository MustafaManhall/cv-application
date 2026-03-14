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

  const [eduList, setEduList] = useState([]);
  const [selectedEdu, setSelectedEdu] = useState(null);

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
    if (formData.id === undefined) {
      setEduList([...eduList, { id: crypto.randomUUID(), ...formData }]);
      setSelectedEdu(null);
    } else {
      setEduList(
        eduList.map((data) => {
        if(data.id === formData.id) {
          return formData;
        } else {
          return data;
        }
      }));
    }
  }
  function handlePracticalForm(practicalData) {
    setPracticalForm({
      companyName: practicalData.companyName,
      positionTitle: practicalData.positionTitle,
      description: practicalData.description,
      startDate: practicalData.startDate,
      endDate: practicalData.endDate,
    });
  }

  function handleEditBtn(key) {
    // e.preventDefault();
    const item = eduList.find((data) => data.id === key);
    setSelectedEdu(item);
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
        <EduInfo
          storeFormData={handleEduInfo}
          selectedEdu={selectedEdu}
          setSelected={setSelectedEdu}
        />
        <PracticalExp
          storePracticalForm={handlePracticalForm}
          data={practicalForm}
        />
      </div>
      <Preview
        personalInfo={personalInfo}
        eduData={eduList}
        practicalData={practicalForm}
        editBtn={handleEditBtn}
      />
    </>
  );
}

export default App;
