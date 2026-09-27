function Notices() {
  return (
    <div className="page">

      <h1>Notices 📢</h1>

      <p>Latest campus announcements.</p>

      <div className="page-card">

        <div className="announcement">

          <div className="announcement-icon">
            📢
          </div>

          <div>
            <h3>Mid-Term Examinations</h3>
            <p>Mid exams begin from October 5.</p>
            <small>2 hours ago</small>
          </div>

        </div>

        <div className="announcement">

          <div className="announcement-icon">
            🎓
          </div>

          <div>
            <h3>Next Tech Lab Applications</h3>
            <p>Applications are now open.</p>
            <small>Yesterday</small>
          </div>

        </div>

        <div className="announcement">

          <div className="announcement-icon">
            📚
          </div>

          <div>
            <h3>Library Timings Updated</h3>
            <p>Library will remain open until 10 PM.</p>
            <small>2 days ago</small>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Notices;