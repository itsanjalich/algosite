import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log(formData);
  };

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    };
  
    const formStyle = {
      width: '300px',
      maxWidth: '100%',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      background: '#fff',
    };
  
    const inputStyle = {
      width: '100%',
      padding: '0.5rem',
      margin: '0.5rem 0',
      borderRadius: '0.25rem',
      border: '1px solid #ccc',
    };
  
    const buttonStyle = {
      width: '100%',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      border: 'none',
      background: '#007bff',
      color: '#fff',
      cursor: 'pointer',
    };
  
    return (
      <div style={containerStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2 style={{ marginBottom: '1rem' }}>Signup</h2>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Signup
          </button>
        </form>
      </div>
    );
  };
  
  export default Signup;
