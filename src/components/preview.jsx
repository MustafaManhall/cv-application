import { PersonalInfo } from "./personalInfo";

function Preview({ fullName, email, phoneNumber }) {
  return (
    <div>
      <h1>Preview</h1>
      <div>
        <h2>{fullName}</h2>
        <h2>{email}</h2>
        <h2>{phoneNumber}</h2>
      </div>
    </div>
  );
}

export { Preview };
