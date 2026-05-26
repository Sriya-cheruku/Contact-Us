function App() {
  return (
    <body>
      <div className="card">
        <h1>Contact Us</h1>

        <form>
          {/* First Name + Last Name */}
          <div className="name-row">
            <div className="input-group">
              <label>First Name<span>*</span></label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Last Name<span>*</span></label>
              <input type="text" />
            </div>
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address<span>*</span></label>
            <input type="email" />
          </div>

          {/* Query Type */}
          <div className="input-group">
            <label>Query Type<span>*</span></label>

            <div className="query-row">
              <div className="query-box">
                <input type="radio" name="query" />
                <span>General Enquiry</span>
              </div>

              <div className="query-box">
                <input type="radio" name="query" />
                <span>Support Request</span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="input-group">
            <label>Message<span>*</span></label>
            <textarea></textarea>
          </div>

          {/* Checkbox */}
          <div className="checkbox-group">
            <input type="checkbox" />
            <label>
              I consent to being contacted by the team<span>*</span>
            </label>
          </div>

          {/* Button */}
          <button>Submit</button>
        </form>
      </div>
    </body>
  );
}

export default App;