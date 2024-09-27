import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DeviceDetailPage from './pages/DeviceDetailPage';
import AdminPanel from './pages/AdminPanel';
import NavBar from './components/Navbar';
import SignInPage from './pages/Signin';
import SignUpPage from './pages/Signup';
import { useAuthStore } from './store/authStore';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/device/:id" element={<DeviceDetailPage />} />
        <Route path="/admin" element={<PrivateRoute element={<AdminPanel />} />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;