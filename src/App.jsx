import { EduInfo } from "./components/eduInfo";
import { PersonalInfo } from "./components/personalInfo";
import { PracticalExp } from "./components/practicalExperience";
import { Preview } from "./components/preview";
import "./styles/App.css";

function App() {
  return (
    <>
      <div>
        <PersonalInfo />
        <EduInfo />
        <PracticalExp />
      </div>
      <Preview />
    </>
  );
}

export default App;
