import React, { useState } from "react";

function AddComplaint() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    studentEmail: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/complaints", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(() => {
      alert("Complaint Submitted Successfully!");
      setForm({
        title: "",
        description: "",
        category: "",
        studentEmail: ""
      });
    });
  };

  return (
    <div className="card">
      <h2>Raise Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title"
          value={form.title} onChange={handleChange} required />

        <textarea name="description" placeholder="Description"
          value={form.description} onChange={handleChange} required />

        <input name="category" placeholder="Category"
          value={form.category} onChange={handleChange} required />

        <input name="studentEmail" placeholder="Student Email"
          value={form.studentEmail} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddComplaint;