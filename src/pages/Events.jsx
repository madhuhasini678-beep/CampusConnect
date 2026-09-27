function Events() {
  return (
    <div className="page">

      <h1>Campus Events 🎯</h1>

      <p>Discover upcoming events on campus.</p>

      <div className="page-card">

        <div className="event">
          <div className="event-date">
            <strong>28</strong>
            <span>SEP</span>
          </div>

          <div>
            <h3>Hackathon 2026</h3>
            <p>💻 Innovation Lab</p>
          </div>
        </div>

        <div className="event">
          <div className="event-date">
            <strong>30</strong>
            <span>SEP</span>
          </div>

          <div>
            <h3>Tech Workshop</h3>
            <p>🎤 Seminar Hall</p>
          </div>
        </div>

        <div className="event">
          <div className="event-date">
            <strong>04</strong>
            <span>OCT</span>
          </div>

          <div>
            <h3>Coding Club Meetup</h3>
            <p>👨‍💻 Student Activity Center</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Events;