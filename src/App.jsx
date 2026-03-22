import { useRef, useState } from "react";
import { EduInfo } from "./components/eduInfo";
import { PersonalInfo } from "./components/personalInfo";
import { PracticalExp } from "./components/practicalExperience";
import { Preview } from "./components/preview";
import { Card, LanguageTags, Tags } from "./components/card";
import { IoMdAdd } from "react-icons/io";
import "./styles/App.css";
import { SwitcherTab } from "./components/switcherTab";
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills";
import { Languages } from "./components/languages";
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    jopTitle: "",
    email: "",
    phoneNumber: "",
    location: "",
    summary: "",
  });
  const [eduList, setEduList] = useState([
    {
      id: "edu-init",
      schoolName: "MIT",
      degree: "BSc Computer Science",
      startDate: "2020-01-01",
      endDate: "2024-09-01",
      eduLocation: "Baghdad - iraq",
    },
  ]);
  const [practicalList, setPracticalList] = useState([
    {
      id: "exp-init",
      companyName: "Google",
      positionTitle: "Frontend Developer",
      description: "",
      startDate: "2024-10-01",
      endDate: "2026-03-18",
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState({
    practicalForm: false,
    eduForm: false,
    skillsForm: false,
    languagesForm: false,
  });
  const [selectedExp, setSelectedExp] = useState(null);
  const [selectedEdu, setSelectedEdu] = useState(null);
  const cv = useRef();
  const [activeTab, setActiveTab] = useState("edit");
  const [skills, setSkills] = useState(["Microsoft Word","Microsoft Excel"]);
  const [languages, setLanguages] = useState([{id: "language init", language: "English", proficiency: "Fluent"}]);

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
  function handleEditEduBtn(key) {
    const item = eduList.find((data) => data.id === key);
    setSelectedEdu(item);
    setIsFormOpen({ ...isFormOpen, eduForm: true });
  }
  function handleEditExpBtn(key) {
    const item = practicalList.find((data) => data.id === key);
    setSelectedExp(item);
    setIsFormOpen({ ...isFormOpen, practicalForm: true });
  }
  function handleDeleteEduBtn(key) {
    const newList = eduList.filter((data) => data.id !== key);
    setEduList(newList);
  }
  function handleDeleteExpBtn(key) {
    const newList = practicalList.filter((data) => data.id !== key);
    setPracticalList(newList);
  }
  function handleCloseBtn(form) {
    setIsFormOpen({ ...isFormOpen, [form]: false });
    if (form === "eduForm") {
      setSelectedEdu(null);
    } else if (form === "practicalForm") {
      setSelectedExp(null);
    }
  }
  function handleActiveTab(tab) {
    setActiveTab(tab);
  }
  function handleSummary(e) {
    setPersonalInfo({ ...personalInfo, summary: e.target.value });
  }
  function handleJopTitle(e) {
    setPersonalInfo({ ...personalInfo, jopTitle: e.target.value });
  }
  function handleSkillsForm(skill) {
    setSkills([...skills, skill]);
    setIsFormOpen({ ...isFormOpen, skillsForm: false });
  }
  function handleDeleteSkill(index) {
    const newList = skills.filter((_, i) => i !== index);
    setSkills(newList);
  }
  function handleLanguagesForm(language) {
    setLanguages([...languages, { id: crypto.randomUUID(), ...language }]);
    setIsFormOpen({ ...isFormOpen, languagesForm: false });
  }
  function handleDeleteLanguage(key) {
    const newList = languages.filter((data) => data.id !== key);
    setLanguages(newList);
  }

  return (
    <>
      <Navbar cvRef={cv} activeTab={activeTab} />
      <SwitcherTab activeTab={activeTab} handleActiveTab={handleActiveTab} />
      <main>
        <div className={`sidebar ${activeTab === "edit" ? "active" : ""}`}>
          <div className="sidebar-content">
            <PersonalInfo
              personalInfo={personalInfo}
              handleFullName={handleFullName}
              handleJopTitle={handleJopTitle}
              handleEmail={handleEmail}
              handlePhoneNumber={handlePhoneNumber}
              handleLocation={handleLocation}
              handleSummary={handleSummary}
            />
            <div className="divider"></div>
            <Card
              data={eduList}
              titleKey="schoolName"
              subtitleKey="degree"
              handleDelete={handleDeleteEduBtn}
              handleEdit={handleEditEduBtn}
              sectionTitle="Education"
            />
            {!isFormOpen.eduForm && (
              <button
                className="add btn btn-outline"
                onClick={() => handleIsFormOpen("eduForm")}
              >
                <IoMdAdd /> Add EduInfo
              </button>
            )}
            {isFormOpen.eduForm && (
              <EduInfo
                storeFormData={handleEduInfo}
                selectedEdu={selectedEdu}
                setSelected={setSelectedEdu}
                handleClose={() => handleCloseBtn("eduForm")}
              />
            )}
            <div className="divider"></div>
            <Card
              data={practicalList}
              titleKey="companyName"
              subtitleKey="description"
              handleDelete={handleDeleteExpBtn}
              handleEdit={handleEditExpBtn}
              sectionTitle="Experience"
            />
            {!isFormOpen.practicalForm && (
              <button
                className="add btn btn-outline"
                onClick={() => handleIsFormOpen("practicalForm")}
              >
                <IoMdAdd /> Add Experience
              </button>
            )}
            {isFormOpen.practicalForm && (
              <PracticalExp
                storePracticalForm={handlePracticalForm}
                data={practicalList}
                selectedExp={selectedExp}
                setSelected={setSelectedExp}
                handleClose={() => handleCloseBtn("practicalForm")}
              />
            )}
            <div className="divider"></div>
            <Tags
              data={skills}
              sectionTitle="Skills"
              handleDelete={handleDeleteSkill}
            />
            {!isFormOpen.skillsForm && (
              <button
                className="add btn btn-outline"
                onClick={() => handleIsFormOpen("skillsForm")}
              >
                <IoMdAdd /> Add Skill
              </button>
            )}
            {isFormOpen.skillsForm && (
              <Skills
                storeSkill={handleSkillsForm}
                handleClose={() => handleCloseBtn("skillsForm")}
              />
            )}
            <div className="divider"></div>
            <LanguageTags
              data={languages}
              sectionTitle="Languages"
              handleDelete={handleDeleteLanguage}
            />
            {!isFormOpen.languagesForm && (
              <button
                className="add btn btn-outline"
                onClick={() => handleIsFormOpen("languagesForm")}
              >
                <IoMdAdd /> Add Language
              </button>
            )}
            {isFormOpen.languagesForm && (
              <Languages
                storeLanguage={handleLanguagesForm}
                handleClose={() => handleCloseBtn("languagesForm")}
              />
            )}
          </div>
        </div>

        <div className={`preview ${activeTab === "preview" ? "active" : ""}`}>
          <Preview
            personalInfo={personalInfo}
            eduData={eduList}
            practicalData={practicalList}
            skillsData={skills}
            languagesData={languages}
            cvRef={cv}
          />
        </div>
      </main>
    </>
  );
}

export default App;
