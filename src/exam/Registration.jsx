import React, { useState } from "react";

function Registration() {

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    course: "",
    language: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("customerRegistrations")) || [];

    const newUser = {
      ...formData,
      id: Date.now(),
      registeredAt: new Date().toLocaleString()
    };

    users.push(newUser);

    localStorage.setItem(
      "customerRegistrations",
      JSON.stringify(users)
    );

    alert("Registration Successful!");

    setFormData({
      fullName: "",
      username: "",
      email: "",
      course: "",
      language: ""
    });
  };

  return (
    <div>

      <h2>Course Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option>FDEF</option>
          <option>JAVA</option>
          <option>DSA</option>
          <option>PYTHON</option>
        </select>

        <br /><br />

        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <option value="">Preferred Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
          <option>Tamil</option>
        </select>

        <br /><br />

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Registration;