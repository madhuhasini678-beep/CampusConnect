function Settings() {
  return (
    <div className="page">

      <h1>Settings ⚙️</h1>

      <p>Manage your CampusConnect preferences.</p>

      <div className="settings-card">

        <div className="settings-section">
          <div>
            <h3>Notifications</h3>
            <p>Receive updates about classes, assignments and events.</p>
          </div>

          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        </div>

        <div className="settings-section">
          <div>
            <h3>Assignment Reminders</h3>
            <p>Get reminders before your assignments are due.</p>
          </div>

          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        </div>

        <div className="settings-section">
          <div>
            <h3>Event Updates</h3>
            <p>Receive notifications about upcoming campus events.</p>
          </div>

          <label className="toggle">
            <input type="checkbox" />
            <span></span>
          </label>
        </div>

        <div className="settings-section">
          <div>
            <h3>Language</h3>
            <p>Choose your preferred language.</p>
          </div>

          <select defaultValue="English">
            <option>English</option>
            <option>Telugu</option>
          </select>
        </div>

      </div>

    </div>
  );
}

export default Settings;