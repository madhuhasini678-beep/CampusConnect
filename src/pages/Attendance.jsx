function Attendance() {
  return (
    <div className="page">

      <h1>My Attendance 📊</h1>

      <p>Track your attendance across all subjects.</p>

      <div className="attendance-card">

        <div className="attendance-summary">
          <div className="attendance-circle">
            <strong>92%</strong>
            <span>Overall</span>
          </div>

          <div>
            <h2>Good attendance!</h2>
            <p>
              You are currently above the minimum attendance requirement.
            </p>
          </div>
        </div>

        <div className="attendance-list">

          <div className="attendance-row">
            <div>
              <strong>Design and Analysis of Algorithms</strong>
              <span>DAA</span>
            </div>
            <strong>95%</strong>
          </div>

          <div className="attendance-row">
            <div>
              <strong>Digital Electronics</strong>
              <span>DE</span>
            </div>
            <strong>90%</strong>
          </div>

          <div className="attendance-row">
            <div>
              <strong>Object Oriented Programming</strong>
              <span>OOP with C++</span>
            </div>
            <strong>92%</strong>
          </div>

          <div className="attendance-row">
            <div>
              <strong>Discrete Mathematics</strong>
              <span>DM</span>
            </div>
            <strong>91%</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;