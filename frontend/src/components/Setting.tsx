import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Settings</h1>

        <div className="space-y-6">
          {/* Dark Mode */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Dark Mode</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          {/* Notifications */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Notifications</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

          {/* Account Actions */}
          <div className="divider">Account</div>

          <button className="btn btn-outline w-full">
            Change Password
          </button>

          <button className="btn btn-error w-full">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;