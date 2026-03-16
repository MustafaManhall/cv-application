import { useRef, useState } from "react";
import { EduInfo } from "./components/eduInfo";
import { PersonalInfo } from "./components/personalInfo";
import { PracticalExp } from "./components/practicalExperience";
import { Preview } from "./components/preview";
import { DownloadCv } from "./components/downloadCv";
import { Card } from "./components/card";
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

  const [isFormOpen, setIsFormOpen] = useState({
    practicalForm: false,
    eduForm: false,
  });

  const [practicalList, setPracticalList] = useState([]);
  const [selectedExp, setSelectedExp] = useState(null);

  const cv = useRef();
  const [isPrinting, setIsPrinting] = useState(false);

  function handleIsFormOpen(form) {
    setIsFormOpen({ ...isFormOpen, [form]: true });
  }

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
      setIsFormOpen({ ...isFormOpen, eduForm: false });
    } else {
      setEduList(
        eduList.map((data) => {
          if (data.id === formData.id) {
            return formData;
          } else {
            return data;
          }
        }),
      );
      setIsFormOpen({ ...isFormOpen, eduForm: false });
    }
  }
  function handlePracticalForm(practicalData) {
    if (practicalData.id === undefined) {
      setPracticalList([
        ...practicalList,
        { id: crypto.randomUUID(), ...practicalData },
      ]);
      setIsFormOpen({ ...isFormOpen, practicalForm: false });
    } else {
      setPracticalList(
        practicalList.map((data) => {
          if (data.id === practicalData.id) {
            return practicalData;
          } else {
            return data;
          }
        }),
      );
      setIsFormOpen({ ...isFormOpen, practicalForm: false });
    }
  }

  function handleEditBtn(key) {
    const item = eduList.find((data) => data.id === key);
    setSelectedEdu(item);
    setIsFormOpen({ ...isFormOpen, eduForm: true });
  }

  function handleEditExpBtn(key) {
    const item = practicalList.find((data) => data.id === key);
    setSelectedExp(item);
    setIsFormOpen({ ...isFormOpen, practicalForm: true });
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
        <Card data={eduList} titleKey="schoolName" subtitleKey="degree" />
        {!isFormOpen.eduForm && (
          <button
            className="add-edu"
            onClick={() => handleIsFormOpen("eduForm")}
          >
            Add EduInfo
          </button>
        )}
        {isFormOpen.eduForm && (
          <EduInfo
            storeFormData={handleEduInfo}
            selectedEdu={selectedEdu}
            setSelected={setSelectedEdu}
          />
        )}
        <Card
          data={practicalList}
          titleKey="companyName"
          subtitleKey="description"
        />
        {!isFormOpen.practicalForm && (
          <button
            className="add-experience"
            onClick={() => handleIsFormOpen("practicalForm")}
          >
            Add Experience
          </button>
        )}
        {isFormOpen.practicalForm && (
          <PracticalExp
            storePracticalForm={handlePracticalForm}
            data={practicalList}
            selectedEdu={selectedExp}
            setSelected={setSelectedExp}
          />
        )}
      </div>
      <div>
        <Preview
          personalInfo={personalInfo}
          eduData={eduList}
          practicalData={practicalList}
          editBtn={handleEditBtn}
          editExpBtn={handleEditExpBtn}
          cvRef={cv}
          isPrinting={isPrinting}
        />
        <DownloadCv cvRef={cv} setPrinting={setIsPrinting} />
      </div>
    </>
  );
}

export default App;
