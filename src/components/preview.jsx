import "../styles/preview.css";

function Preview({ personalInfo, eduData, practicalData, cvRef }) {
  return (
    <div className="preview-area">
      <div ref={cvRef} className="a4-paper">
        <header>
          <h1>{personalInfo.fullName}</h1>
          <h3>{personalInfo.jopTitle}</h3>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phoneNumber}</p>
          <p>{personalInfo.location}</p>
        </header>
        <div className="summary">
          <h2>Summary</h2>
          <p>{personalInfo.summary}</p>
        </div>
        <div className="cv-edu">
          <h2>Education</h2>
          {eduData.map((data) => {
            return (
              <div key={data.id}>
                <div className="cv-row">
                  <h3>{data.schoolName}</h3>
                  <div className="dates">
                    <p>{`${new Date(data.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -`}</p>
                    <p>
                      {new Date(data.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
                <p>{data.degree}</p>
                <p>{data.eduLocation}</p>
              </div>
            );
          })}
        </div>
        <div className="cv-exp">
          <h2>Experience</h2>
          {practicalData.map((data) => {
            return (
              <div key={data.id}>
                <div className="cv-row">
                  <h3>{data.companyName}</h3>
                  <div className="dates">
                    <p>{`${new Date(data.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -`}</p>
                    <p>
                      {new Date(data.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
                <p>{data.positionTitle}</p>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Preview };
