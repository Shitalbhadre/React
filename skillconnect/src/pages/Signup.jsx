import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      localStorage.setItem('skillconnect_user', JSON.stringify(form));
      localStorage.setItem('isLoggedIn', true);
      alert('Signup successful!');
      navigate('/'); // go to Home
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} /><br /><br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} /><br /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
