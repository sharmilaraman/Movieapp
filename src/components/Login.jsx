import React, { useState, useEffect } from 'react';
import '../components/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    alert("Login Successfully");
    setEmail('');
    setPassword('');
    navigate('/home');
  };

  console.log("Login component rendered");

  return (
    <div className="login-container">
      <h1 className="logo">BINGO</h1>
      <h2>
        Login to stream <span className="highlight">Unlimited Movies</span>
      </h2>

      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Log In</button>
      </form>

      <button className="google-btn">Continue with Google</button>
      <p>
        Don't have an account? <span className="login-link">Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
