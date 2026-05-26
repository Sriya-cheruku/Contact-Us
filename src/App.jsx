function App() {
  return (
    <main className="container">
      <div className="card">
        <h1>Contact Us</h1>

        <form>
          {/* First Name + Last Name */}
          <div className="name-row">
            <div className="input-group">
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>

              <input
                id="firstName"
                type="text"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>

              <input
                id="lastName"
                type="text"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>

            <input
              id="email"
              type="email"
              required
            />
          </div>

          {/* Query Type */}
          <div className="input-group">
            <label>
              Query Type <span>*</span>
            </label>

            <div className="query-row">
              <label className="query-box" htmlFor="general">
                <input
                  id="general"
                  type="radio"
                  name="query"
                  required
                />

                <span>General Enquiry</span>
              </label>

              <label className="query-box" htmlFor="support">
                <input
                  id="support"
                  type="radio"
                  name="query"
                  required
                />

                <span>Support Request</span>
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="input-group">
            <label htmlFor="message">
              Message <span>*</span>
            </label>

            <textarea
              id="message"
              required
            ></textarea>
          </div>

          {/* Checkbox */}
          <label className="checkbox-group" htmlFor="consent">
            <input
              id="consent"
              type="checkbox"
              required
            />

            <span>
              I consent to being contacted by the team
              <span>*</span>
            </span>
          </label>

          {/* Button */}
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;