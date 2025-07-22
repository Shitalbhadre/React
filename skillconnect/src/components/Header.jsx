import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', false);
    alert('You have been logged out.');
    navigate('/');
  };

  return (
    <header style={{ padding: '10px', background: '#4a90e2', color: 'white' }}>
      <h2>SkillConnect</h2>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>

        {!isLoggedIn && (
          <>
            <Link to="/login" style={{ color: 'white', marginRight: '10px' }}>Login</Link>
            <Link to="/signup" style={{ color: 'white', marginRight: '10px' }}>Signup</Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to="/feed" style={{ color: 'white', marginRight: '10px' }}>Feed</Link>

            <Link to="/profile" style={{ color: 'white', marginRight: '10px' }}>Profile</Link>
            <button
              onClick={handleLogout}
              style={{
                background: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
