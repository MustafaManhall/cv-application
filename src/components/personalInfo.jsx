import "../styles/personalInfo.css";

function PersonalInfo({
  fullName,
  handleFullName,
  email,
  handleEmail,
  phoneNumber,
  handlePhoneNumber,
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
          value={fullName}
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
          value={email}
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
          value={phoneNumber}
          onChange={handlePhoneNumber}
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
