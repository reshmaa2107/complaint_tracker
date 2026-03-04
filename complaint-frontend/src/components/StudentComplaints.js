import React, { useState } from "react";

function StudentComplaints() {

  const [email, setEmail] = useState("");
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = () => {
    fetch(`http://localhost:8080/api/complaints/student/${email}`)
      .then(res => res.json())
      .then(data => setComplaints(data));
  };

  return (
    <div className="card">
      <h2>My Complaints</h2>

      <input placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)} />

      <button onClick={fetchComplaints}>Search</button>

      {complaints.map(c => (
        <div key={c.id} className="complaint">
          <h4>{c.title}</h4>
          <p>{c.description}</p>
          <p><b>Status:</b> {c.status}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentComplaints;