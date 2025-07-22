import React, { useState, useEffect } from 'react';

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem('skillconnect_user'));
  const [user, setUser] = useState(storedUser || {});
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('skillconnect_user', JSON.stringify(user));
    setEditMode(false);
    alert('Profile update!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Profile</h2>

      {editMode ? (
        <>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
          /><br /><br />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled // Email is not editable
          /><br /><br />
          <textarea
            name="bio"
            placeholder="Bio"
            value={user.bio || ''}
            onChange={handleChange}
            rows="3"
          /><br /><br />
          <input
            name="skills"
            placeholder="Skills (comma separated)"
            value={user.skills || ''}
            onChange={handleChange}
          /><br /><br />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio || 'N/A'}</p>
          <p><strong>Skills:</strong> {user.skills || 'N/A'}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default Profile;
