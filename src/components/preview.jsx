import { PersonalInfo } from "./personalInfo";

function Preview({ fullName, email, phoneNumber, location, formData }) {
  return (
    <div>
      <h1>Preview</h1>
      <div>
        <h2>{fullName}</h2>
        <h2>{email}</h2>
        <h2>{phoneNumber}</h2>
        <h2>{location}</h2>
      </div>
      <div>
        <h2>{formData.schoolName}</h2>
        <h2>{formData.degree}</h2>
        <h2>{formData.startDate}</h2>
        <h2>{formData.endDate}</h2>
        <h2>{formData.eduLocation}</h2>
      </div>
    </div>
  );
}

export { Preview };
