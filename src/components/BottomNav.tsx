import { Home, Wallet, ChartBar, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-800">
      <div className="flex justify-around py-3">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link to="/wallet" className={`nav-link ${isActive('/wallet') ? 'active' : ''}`}>
          <Wallet size={24} />
          <span>Wallet</span>
        </Link>
        <Link to="/stats" className={`nav-link ${isActive('/stats') ? 'active' : ''}`}>
          <ChartBar size={24} />
          <span>Stats</span>
        </Link>
        <Link to="/settings" className={`nav-link ${isActive('/settings') ? 'active' : ''}`}>
          <Settings size={24} />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;