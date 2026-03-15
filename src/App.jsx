import { EduInfo } from "./components/eduInfo";
import { PersonalInfo } from "./components/personalInfo";
import { PracticalExp } from "./components/practicalExperience";
import { Preview } from "./components/preview";
import { useRef, useState } from "react";
import "./styles/App.css";
import { DownloadCv } from "./components/downloadCv";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [eduList, setEduList] = useState([]);
  const [selectedEdu, setSelectedEdu] = useState(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [practicalList, setPracticalList] = useState([]);
  const [selectedExp, setSelectedExp] = useState(null);

  const cv = useRef();
  const [isPrinting, setIsPrinting] = useState(false);


  function handleIsFormOpen() {
    setIsFormOpen(true);
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
    }
  }
  function handlePracticalForm(practicalData) {
    if (practicalData.id === undefined) {
      setPracticalList([
      ...practicalList,
      { id: crypto.randomUUID(), ...practicalData },
    ]);
    setIsFormOpen(false);
    } else {
      setPracticalList(
        practicalList.map((data) => {
          if (data.id === practicalData.id) {
            return practicalData;
          } else {
            return data;
          }
        })
      );
      setIsFormOpen(false);
    }
  }

  function handleEditBtn(key) {
    const item = eduList.find((data) => data.id === key);
    setSelectedEdu(item);
  }

  function handleEditExpBtn(key) {
    const item = practicalList.find((data) => data.id === key);
    setSelectedExp(item);
    setIsFormOpen(true);
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
        {!isFormOpen && <button className="add-experience" onClick={handleIsFormOpen}>
          Add Experience
        </button>}
        {isFormOpen && (
          <PracticalExp
            storePracticalForm={handlePracticalForm}
            data={practicalList}
            selectedEdu={selectedExp}
            setSelected={setSelectedExp}
          />
        )}
        <DownloadCv cvRef={cv} setPrinting={setIsPrinting}/>
      </div>
      <Preview
        personalInfo={personalInfo}
        eduData={eduList}
        practicalData={practicalList}
        editBtn={handleEditBtn}
        editExpBtn={handleEditExpBtn}
        cvRef={cv}
        isPrinting={isPrinting}
      />
    </>
  );
}

export default App;
