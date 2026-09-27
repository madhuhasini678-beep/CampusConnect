import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    const query = search.toLowerCase().trim();

    if (query.includes("java")) {
      navigate("/assignments");
    } 
    else if (query.includes("hackathon")) {
      navigate("/events");
    } 
    else if (query.includes("schedule")) {
      navigate("/schedule");
    } 
    else if (query.includes("assignment")) {
      navigate("/assignments");
    } 
    else if (query.includes("event")) {
      navigate("/events");
    } 
    else if (query.includes("notice")) {
      navigate("/notices");
    } 
    else if (query.includes("dashboard")) {
      navigate("/");
    } 
    else if (query !== "") {
      alert("No results found");
    }

    setSearch("");
  }

  return (
    <header className="navbar">

      <form className="search-box" onSubmit={handleSearch}>

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span className="shortcut">
          Ctrl K
        </span>

      </form>

      <div className="navbar-right">

        <div className="notification-wrapper">

        <button
          className="notification"
          onClick={() => alert("You have 3 new notifications!")}
        >
          🔔
        </button>
      </div>

        <div
  className="profile"
  onClick={() => navigate("/profile")}
  style={{ cursor: "pointer" }}
>

  <div className="avatar">
    M
  </div>

  <div>
    <strong>Madhu</strong>
    <small>CSE • 2nd Year</small>
  </div>

  <span>⌄</span>

</div>

      </div>

    </header>
  );
}

export default Navbar;