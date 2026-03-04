import React, { useState } from "react";

function Login({ setUser }) {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      if(data && data.role){
        alert("Login Successful");
        setUser(data);
      } else {
        alert("Invalid Credentials");
      }
    });
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input name="email"
          placeholder="Email"
          onChange={handleChange} required />

        <input name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;