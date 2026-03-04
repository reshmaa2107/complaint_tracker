import React, { useEffect, useState } from "react";

function AdminDashboard() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/complaints")
      .then(res => res.json())
      .then(data => setComplaints(data));
  }, []);

  const updateStatus = (id, status) => {
    fetch(`http://localhost:8080/api/complaints/${id}?status=${status}`, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(updated => {
      setComplaints(complaints.map(c =>
        c.id === id ? updated : c
      ));
    });
  };

  const deleteComplaint = (id) => {
    fetch(`http://localhost:8080/api/complaints/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setComplaints(complaints.filter(c => c.id !== id));
    });
  };

  return (
   <div className="card admin-card">
      <h2>Admin Dashboard</h2>

      {complaints.map(c => (
        <div key={c.id} className="complaint">
          <h4>{c.title}</h4>
          <p>{c.description}</p>
          <p><b>Status:</b> {c.status}</p>

          <button onClick={() => updateStatus(c.id,"In Progress")}>
            In Progress
          </button>

          <button onClick={() => updateStatus(c.id,"Resolved")}>
            Resolved
          </button>

          <button onClick={() => deleteComplaint(c.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;