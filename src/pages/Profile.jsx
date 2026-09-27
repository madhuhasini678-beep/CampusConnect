function Profile() {
  return (
    <div className="page">

      <h1>My Profile 👤</h1>

      <p>View and manage your student profile.</p>

      <div className="profile-page-card">

        <div className="profile-header">

          <div className="profile-large-avatar">
            M
          </div>

          <div>
            <h2>Madhu</h2>
            <p>CSE • 2nd Year</p>
          </div>

        </div>

        <div className="profile-details">

          <div className="detail-item">
            <span>🎓</span>
            <div>
              <small>Program</small>
              <strong>B.Tech Computer Science & Engineering</strong>
            </div>
          </div>

          <div className="detail-item">
            <span>🏫</span>
            <div>
              <small>University</small>
              <strong>SRM University-AP</strong>
            </div>
          </div>

          <div className="detail-item">
            <span>📚</span>
            <div>
              <small>Year</small>
              <strong>2nd Year</strong>
            </div>
          </div>

          <div className="detail-item">
            <span>📊</span>
            <div>
              <small>CGPA</small>
              <strong>9.67</strong>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;