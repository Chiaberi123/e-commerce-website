// Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Import the shared styles

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Sign Up clicked:', name, email, password);
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <p>this is frontend Sign Up page, you cant create account</p>
      <form>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="button" onClick={handleRegister}>
          Sign Up
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default SignUp;
