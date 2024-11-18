import { useContext } from 'react';
import './App.css';
import SideBar from './pages/chat-page/components/side-bar/SideBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './pages/chat-page/auth/login/login';

function App() {
  const { user } = useContext(AuthContext);

  return user ? (
    <div className="project-container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  ) : (
    <Login />
  );
}

export default App;
