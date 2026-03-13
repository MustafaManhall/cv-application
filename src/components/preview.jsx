import { PersonalInfo } from "./personalInfo";

function Preview({ personalInfo, formData, practicalData }) {
  return (
    <div>
      <h1>Preview</h1>
      <div>
        <h2>{personalInfo.fullName}</h2>
        <h2>{personalInfo.email}</h2>
        <h2>{personalInfo.phoneNumber}</h2>
        <h2>{personalInfo.location}</h2>
      </div>
      <div>
        <h2>{formData.schoolName}</h2>
        <h2>{formData.degree}</h2>
        <h2>{formData.startDate}</h2>
        <h2>{formData.endDate}</h2>
        <h2>{formData.eduLocation}</h2>
      </div>
      <div>
        <h2>{practicalData.companyName}</h2>
        <h2>{practicalData.positionTitle}</h2>
        <h2>{practicalData.description}</h2>
        <h2>{practicalData.startDate}</h2>
        <h2>{practicalData.endDate}</h2>
      </div>
    </div>
  );
}

export { Preview };
