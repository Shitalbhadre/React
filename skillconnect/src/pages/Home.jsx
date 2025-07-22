import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('skillconnect_user'));
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div
      style={{
        padding: '40px',
        minHeight: '70vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(60,60,120,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isLoggedIn && user ? (
        <div
          style={{
            background: '#fff',
            padding: '32px 48px',
            borderRadius: '14px',
            boxShadow: '0 2px 12px rgba(60,60,120,0.10)',
            textAlign: 'center'
          }}
        >
          <h2 style={{ color: '#4f46e5', marginBottom: '12px' }}>Welcome, {user.name}!</h2>
          <p style={{ color: '#64748b', fontSize: '18px' }}>
            Glad to see you back on <span style={{ color: '#6366f1', fontWeight: 600 }}>SkillConnect</span>.<br />
            Explore new connections and opportunities!
          </p>
        </div>
      ) : (
        <div
          style={{
            background: '#fff',
            padding: '32px 48px',
            borderRadius: '14px',
            boxShadow: '0 2px 12px rgba(60,60,120,0.10)',
            textAlign: 'center'
          }}
        >
          <h2 style={{ color: '#4f46e5', marginBottom: '12px' }}>Welcome to <span style={{ color: '#6366f1' }}>SkillConnect</span></h2>
          <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '24px' }}>
            Your professional network starts here.<br />
            <span style={{ color: '#6366f1', fontWeight: 600 }}>Login</span> or <span style={{ color: '#6366f1', fontWeight: 600 }}>Signup</span> to get started.
          </p>
          <div>
            <a
              href="/login"
              style={{
                background: '#6366f1',
                color: '#fff',
                padding: '10px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                marginRight: '16px',
                fontWeight: 600,
                boxShadow: '0 1px 4px rgba(99,102,241,0.10)'
              }}
            >
              Login
            </a>
            <a
              href="/signup"
              style={{
                background: '#fff',
                color: '#6366f1',
                padding: '10px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '2px solid #6366f1',
                fontWeight: 600,
                boxShadow: '0 1px 4px rgba(99,102,241,0.08)'
              }}
            >
              Signup
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
