import "../styles/personalInfo.css";

function PersonalInfo({
  personalInfo,
  handleFullName,
  handleEmail,
  handlePhoneNumber,
  handleLocation,
}) {
  return (
    <>
      <h5 className="header">Personal Information</h5>
      <form className="personal-info">
        <div className="form-group">
          <label htmlFor="name" className="full-name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="on"
            placeholder="Mustafa Manhal"
            value={personalInfo.fullName}
            onChange={handleFullName}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="on"
              placeholder="mustafa@email.com"
              value={personalInfo.email}
              onChange={handleEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-number" className="phone-number">
              Phone Number
            </label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              autoComplete="on"
              placeholder="+964 771 234 5678"
              value={personalInfo.phoneNumber}
              onChange={handlePhoneNumber}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="location" className="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            autoComplete="on"
            placeholder="Baghdad, iraq"
            value={personalInfo.location}
            onChange={handleLocation}
          />
        </div>
      </form>
    </>
  );
}

export { PersonalInfo };
