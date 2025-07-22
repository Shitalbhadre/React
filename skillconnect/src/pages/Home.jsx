import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('skillconnect_user'));
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div style={{ padding: '20px' }}>
      {isLoggedIn && user ? (
        <h2>Welcome, {user.name}!</h2>
      ) : (
        <>
          <h2>Welcome to SkillConnect</h2>
          <p>Your professional network starts here. Login or Signup to get started.</p>
        </>
      )}
    </div>
  );
};

export default Home;
