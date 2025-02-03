import { Home, Users, Award, ListTodo } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-800">
      <div className="flex justify-around py-3">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link to="/friends" className={`nav-link ${isActive('/friends') ? 'active' : ''}`}>
          <Users size={24} />
          <span>Friends</span>
        </Link>
        <Link to="/leaderboard" className={`nav-link ${isActive('/leaderboard') ? 'active' : ''}`}>
          <Award size={24} />
          <span>Leaderboard</span>
        </Link>
        <Link to="/tasks" className={`nav-link ${isActive('/tasks') ? 'active' : ''}`}>
          <ListTodo size={24} />
          <span>Tasks</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;