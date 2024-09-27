// frontend/src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const NavBar: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/admin" style={styles.navLink}>Panel de Administración</Link>
        </li>
        {isAuthenticated ? (
          <li style={styles.navItem}>
            <button onClick={handleLogout} style={styles.navLink}>Salir</button>
          </li>
        ) : (
          <>
            <li style={styles.navItem}>
              <Link to="/signin" style={styles.navLink}>Iniciar Sesión</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/signup" style={styles.navLink}>Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default NavBar;