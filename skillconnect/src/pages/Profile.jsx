import React, { useState } from 'react';

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

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
      localStorage.removeItem('skillconnect_user');
      setUser({});
      setEditMode(false);
      alert('Profile deleted!');
    }
  };

  return (
    <div
      style={{
        maxWidth: '420px',
        margin: '40px auto',
        padding: '32px 28px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(60,60,120,0.10)',
      }}
    >
      <h2 style={{ color: '#4f46e5', marginBottom: '24px', textAlign: 'center' }}>Your Profile</h2>
      {editMode ? (
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
          onSubmit={e => { e.preventDefault(); handleSave(); }}
        >
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #c7d2fe',
              fontSize: '16px'
            }}
            autoFocus
          />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled
            placeholder="Email"
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #c7d2fe',
              background: '#f1f5f9',
              fontSize: '16px'
            }}
          />
          <textarea
            name="bio"
            placeholder="Bio"
            value={user.bio || ''}
            onChange={handleChange}
            rows="3"
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #c7d2fe',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
          <input
            name="skills"
            placeholder="Skills (comma separated)"
            value={user.skills || ''}
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #c7d2fe',
              fontSize: '16px'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button
              type="submit"
              style={{
                background: '#6366f1',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(99,102,241,0.10)'
              }}
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleDelete}
              style={{
                background: '#fff',
                color: '#ef4444',
                border: '2px solid #ef4444',
                padding: '10px 18px',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Delete Profile
            </button>
          </div>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '24px 18px',
              marginBottom: '18px',
              boxShadow: '0 2px 12px rgba(60,60,120,0.08)'
            }}
          >
            <p style={{ margin: '10px 0', fontSize: '18px' }}>
              <strong>Name:</strong> <span style={{ color: '#6366f1' }}>{user.name}</span>
            </p>
            <p style={{ margin: '10px 0', fontSize: '16px' }}>
              <strong>Email:</strong> <span style={{ color: '#64748b' }}>{user.email}</span>
            </p>
            <p style={{ margin: '10px 0', fontSize: '16px' }}>
              <strong>Bio:</strong> <span style={{ color: '#64748b' }}>{user.bio || 'N/A'}</span>
            </p>
            <p style={{ margin: '10px 0', fontSize: '16px' }}>
              <strong>Skills:</strong> <span style={{ color: '#6366f1' }}>{user.skills || 'N/A'}</span>
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => setEditMode(true)}
              style={{
                background: '#6366f1',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(99,102,241,0.10)'
              }}
            >
              Edit Profile
            </button>
            <button
              onClick={handleDelete}
              style={{
                background: '#fff',
                color: '#ef4444',
                border: '2px solid #ef4444',
                padding: '10px 18px',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Delete Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
