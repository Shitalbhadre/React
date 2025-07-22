import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('skillconnect_user'));
    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
    } else if (!storedUser || storedUser.email !== form.email || storedUser.password !== form.password) {
      setError('Invalid credentials!');
    } else {
      setError('');
      localStorage.setItem('isLoggedIn', true);
      alert('Login successful!');
      navigate('/');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} /><br /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
