import { useState } from "react";
import Login from "./components/Login";
import AddComplaint from "./components/AddComplaint";
import StudentComplaints from "./components/StudentComplaints";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {

  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div className="container">
        <h1>College Complaint Tracker</h1>
        <Login setUser={setUser} />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>College Complaint Tracker</h1>

      <div className="navbar">
        <p>
          Logged in as: <b>{user.email}</b> ({user.role})
        </p>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {user.role === "ADMIN" && (
        <AdminDashboard />
      )}

      {user.role === "STUDENT" && (
        <>
          <AddComplaint user={user} />
          <StudentComplaints user={user} />
        </>
      )}
    </div>
  );
}

export default App;