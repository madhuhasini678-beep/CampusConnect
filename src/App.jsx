import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Schedule from "./pages/Schedule";
import Assignments from "./pages/Assignments";
import Events from "./pages/Events";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Attendance from "./pages/Attendance";

function Dashboard() {
  return (
    <section className="content">

      {/* Welcome */}
      <div className="welcome">
        <div>
          <h1>Good morning, Madhu! 👋</h1>
          <p>Here's what's happening on your campus today.</p>
        </div>

        <button
        className="date-button"
        onClick={() => alert("Today is September 26, 2026")}
      >
        📅 September 26, 2026
      </button>
      </div>


      {/* Statistics */}
      <div className="stats">

        <Link to="/schedule" className="stat-card">
          <div className="stat-icon blue">📚</div>

          <div className="stat-content">
            <p>Classes Today</p>
            <h2>5</h2>
            <span>↑ 12% from last week</span>
          </div>
        </Link>


        <Link to="/assignments" className="stat-card">
          <div className="stat-icon orange">📝</div>

          <div className="stat-content">
            <p>Pending Tasks</p>
            <h2>8</h2>
            <span>↑ 12% from last week</span>
          </div>
        </Link>


        <Link to="/events" className="stat-card">
          <div className="stat-icon green">🎯</div>

          <div className="stat-content">
            <p>Upcoming Events</p>
            <h2>12</h2>
            <span>↑ 12% from last week</span>
          </div>
        </Link>


        <Link to="/attendance" className="stat-card">
          <div className="stat-icon purple">📊</div>

          <div className="stat-content">
            <p>Attendance</p>
            <h2>92%</h2>
            <span>↑ 12% from last week</span>
          </div>
        </Link>

      </div>


      {/* Today's Schedule + Upcoming Events */}
      <div className="dashboard-grid">

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Today's Schedule</h2>
              <p>Your classes for today</p>
            </div>

            <Link to="/schedule" className="view-button">
              View All
            </Link>
          </div>


          <div className="schedule-item">

            <div className="time">
              <strong>09:00</strong>
              <span>AM</span>
            </div>

            <div className="class-info blue-line">
              <h3>Design and Analysis of Algorithms</h3>
              <p>AB-2 • Room 204</p>
            </div>

          </div>


          <div className="schedule-item">

            <div className="time">
              <strong>11:00</strong>
              <span>AM</span>
            </div>

            <div className="class-info purple-line">
              <h3>Digital Electronics</h3>
              <p>AB-1 • Room 103</p>
            </div>

          </div>


          <div className="schedule-item">

            <div className="time">
              <strong>02:00</strong>
              <span>PM</span>
            </div>

            <div className="class-info green-line">
              <h3>Object Oriented Programming</h3>
              <p>AB-2 • Room 301</p>
            </div>

          </div>

        </div>


        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Upcoming Events</h2>
              <p>Don't miss these events</p>
            </div>

            <Link to="/events" className="view-button">
              View All
            </Link>
          </div>


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


      {/* Assignments + Notices */}
      <div className="bottom-grid">

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Pending Assignments</h2>
              <p>Things you need to complete</p>
            </div>

            <Link to="/assignments" className="view-button">
              View All
            </Link>
          </div>


          <div className="assignment">

            <div className="assignment-icon">
              📘
            </div>

            <div className="assignment-info">
              <h3>Java Exception Handling</h3>
              <p>Java • Due tomorrow</p>
            </div>

            <span className="priority high">
              High
            </span>

          </div>


          <div className="assignment">

            <div className="assignment-icon">
              📐
            </div>

            <div className="assignment-info">
              <h3>K-Map Problems</h3>
              <p>Digital Electronics • Due Sep 29</p>
            </div>

            <span className="priority medium">
              Medium
            </span>

          </div>


          <div className="assignment">

            <div className="assignment-icon">
              💻
            </div>

            <div className="assignment-info">
              <h3>Prim's Algorithm</h3>
              <p>DAA • Due Oct 2</p>
            </div>

            <span className="priority low">
              Low
            </span>

          </div>

        </div>


        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Latest Notices</h2>
              <p>Recent campus announcements</p>
            </div>

            <Link to="/notices" className="view-button">
              View All
            </Link>
          </div>


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
      {/* Quick Actions */}

      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="quick-action-grid">

          <Link to="/assignments" className="quick-action">
            <span>📝</span>
            <div>
              <strong>View Assignments</strong>
              <small>Check pending tasks</small>
            </div>
          </Link>

          <Link to="/schedule" className="quick-action">
            <span>📅</span>
            <div>
              <strong>View Schedule</strong>
              <small>Check today's classes</small>
            </div>
          </Link>

          <Link to="/events" className="quick-action">
            <span>🎯</span>
            <div>
              <strong>Explore Events</strong>
              <small>Discover campus events</small>
            </div>
          </Link>

          <Link to="/attendance" className="quick-action">
            <span>📊</span>
            <div>
              <strong>Check Attendance</strong>
              <small>View subject attendance</small>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}


function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main className="main">

          <Navbar />

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/schedule"
              element={<Schedule />}
            />

            <Route
              path="/assignments"
              element={<Assignments />}
            />

            <Route
              path="/events"
              element={<Events />}
            />

            <Route
              path="/notices"
              element={<Notices />}
            />
          <Route
           path="/profile" 
          element={<Profile />} />
          <Route 
          path="/settings"
           element={<Settings />} />
           <Route 
           path="/attendance"
            element={<Attendance />} />
          </Routes>
          <footer className="footer">
          <p>© 2026 CampusConnect • Student Hub</p>
          <span>Built with React ⚛️</span>
        </footer>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;