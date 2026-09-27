import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="logo">

        <div className="logo-icon">
          🎓
        </div>

        <div>
          <h2>CampusConnect</h2>
          <span>Student Hub</span>
        </div>

      </div>


      {/* Navigation */}
      <nav className="navigation">

        <p className="nav-title">MAIN MENU</p>


        {/* Dashboard */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>🏠</span>
          Dashboard
        </NavLink>


        {/* Schedule */}
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>📅</span>
          Schedule
        </NavLink>


        {/* Assignments */}
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>📝</span>
          Assignments
        </NavLink>


        {/* Events */}
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>🎯</span>
          Events
        </NavLink>


        {/* Notices */}
        <NavLink
          to="/notices"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>📢</span>
          Notices
        </NavLink>


        <p className="nav-title">ACCOUNT</p>


        {/* Profile */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>👤</span>
          Profile
        </NavLink>


        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>⚙️</span>
          Settings
        </NavLink>

      </nav>


      {/* Support */}
      <div className="sidebar-bottom">

        <div className="help-box">

          <div>💡</div>

          <h3>Need Help?</h3>

          <p>
            Contact campus support
          </p>

          <a
            href="mailto:support@campusconnect.com"
            className="support-button"
          >
            Get Support
          </a>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;