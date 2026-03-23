import "../styles/preview.css";

function Preview({
  personalInfo,
  eduData,
  practicalData,
  skillsData,
  languagesData,
  projectsData,
  cvRef,
}) {
  return (
    <div className="preview-area">
      <div ref={cvRef} className="a4-paper">
        <header>
          <h1>{personalInfo.fullName}</h1>
          <h3>{personalInfo.jopTitle}</h3>
          <div className="contacts">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phoneNumber}</p>
            <p>{personalInfo.location}</p>
          </div>
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
        <div className="cv-pro">
          <h2>Projects</h2>
          {projectsData.map((data) => {
            return (
              <div key={data.id}>
                <div className="cv-row">
                  <h3>{data.projectName}</h3>
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
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
        <div className="cv-skills">
          <h2>Skills</h2>
          {skillsData.map((skill, index) => {
            return (
              <p key={index} className="skill">
                {skill}
              </p>
            );
          })}
        </div>
        <div className="cv-language">
          <h2>Languages</h2>
          {languagesData.map((data) => {
            return (
              <p key={data.id} className="language">
                {data.language} - {data.proficiency}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Preview };
