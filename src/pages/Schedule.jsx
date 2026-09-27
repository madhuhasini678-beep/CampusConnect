function Schedule() {
  return (
    <div className="page">

      <h1>My Schedule 📅</h1>

      <p>Here is your class schedule.</p>

      <div className="page-card">

        <h2>Today's Classes</h2>

        <div className="schedule-row">
          <strong>09:00 AM</strong>
          <span>Design and Analysis of Algorithms</span>
          <small>AB-2 • Room 204</small>
        </div>

        <div className="schedule-row">
          <strong>11:00 AM</strong>
          <span>Digital Electronics</span>
          <small>AB-1 • Room 103</small>
        </div>

        <div className="schedule-row">
          <strong>02:00 PM</strong>
          <span>Object Oriented Programming</span>
          <small>AB-2 • Room 301</small>
        </div>

      </div>

    </div>
  );
}

export default Schedule;