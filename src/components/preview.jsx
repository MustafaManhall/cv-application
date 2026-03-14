import { PersonalInfo } from "./personalInfo";

function Preview({ personalInfo, eduData, practicalData, editBtn, editExpBtn }) {
  return (
    <div>
      <h1>Preview</h1>
      <div>
        <h2>{personalInfo.fullName}</h2>
        <h2>{personalInfo.email}</h2>
        <h2>{personalInfo.phoneNumber}</h2>
        <h2>{personalInfo.location}</h2>
      </div>
      {eduData.map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.schoolName}</h2>
            <h2>{data.degree}</h2>
            <h2>{data.startDate}</h2>
            <h2>{data.endDate}</h2>
            <h2>{data.eduLocation}</h2>
            <button className="edit-btn" onClick={() => editBtn(data.id)}>
              Edit
            </button>
          </div>
        );
      })}
      {practicalData.map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.companyName}</h2>
            <h2>{data.positionTitle}</h2>
            <h2>{data.description}</h2>
            <h2>{data.startDate}</h2>
            <h2>{data.endDate}</h2>
            <button className="edit-btn" onClick={() => editExpBtn(data.id)}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
}

export { Preview };
