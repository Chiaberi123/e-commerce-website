// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'; // Import the shared styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here

    // For demonstration purposes, let's assume the login is successful
    // You would typically check credentials and authenticate with a backend
    const isLoggedIn = true;

    if (isLoggedIn) {
      // Redirect to the product list page
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <p>this is frontend Login Page </p>
      <form>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up here</Link>
      </p>
    </div>
  );
};

export default Login;
