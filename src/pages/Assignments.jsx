function Assignments() {
  return (
    <div className="page">

      <h1>Assignments 📝</h1>

      <p>Track your pending assignments.</p>

      <div className="page-card">

        <div className="assignment">
          <div className="assignment-icon">📘</div>

          <div className="assignment-info">
            <h3>Java Exception Handling</h3>
            <p>Java • Due tomorrow</p>
          </div>

          <span className="priority high">
            High
          </span>
        </div>

        <div className="assignment">
          <div className="assignment-icon">📐</div>

          <div className="assignment-info">
            <h3>K-Map Problems</h3>
            <p>Digital Electronics • Due Sep 29</p>
          </div>

          <span className="priority medium">
            Medium
          </span>
        </div>

        <div className="assignment">
          <div className="assignment-icon">💻</div>

          <div className="assignment-info">
            <h3>Prim's Algorithm</h3>
            <p>DAA • Due Oct 2</p>
          </div>

          <span className="priority low">
            Low
          </span>
        </div>

      </div>

    </div>
  );
}

export default Assignments;