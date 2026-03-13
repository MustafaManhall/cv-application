import "../styles/personalInfo.css";

function PersonalInfo({
  personalInfo,
  handleFullName,
  handleEmail,
  handlePhoneNumber,
  handleLocation
}) {
  return (
    <>
      <h1>Personal Information</h1>
      <form className="personal-info">
        <label htmlFor="name" className="full-name">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="on"
          value={personalInfo.fullName}
          onChange={handleFullName}
        />
        <label htmlFor="email" className="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="on"
          value={personalInfo.email}
          onChange={handleEmail}
        />
        <label htmlFor="phone-number" className="phone-number">
          Phone Number
        </label>
        <input
          type="text"
          name="phone-number"
          id="phone-number"
          autoComplete="on"
          value={personalInfo.phoneNumber}
          onChange={handlePhoneNumber}
        />
        <label htmlFor="location" className="location">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          autoComplete="on"
          value={personalInfo.location}
          onChange={handleLocation}
        />
        {/* Not needed right now */}
        {/* <div className="btns">
          <button className="edit-btn">Edit</button>
          <button className="submit-btn">Submit</button>
        </div> */}
      </form>
    </>
  );
}

export { PersonalInfo };
