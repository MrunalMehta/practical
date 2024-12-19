/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link, /* Outlet, */ useLocation } from 'react-router-dom';
// import Sidebar from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';
import { Home, Menu, Moon, Sun, User, Users, X } from 'lucide-react';
import Header from './Header';

const NavLink = ({ item, isOpen, isDark }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`
        w-full flex items-center p-4 transition-colors hover:bg-gray-700
        ${isActive ? (isDark ? 'bg-gray-700' : '') : ''}
      `}
    >
      {item.icon}
      {isOpen && <span className='ml-4'>{item.title}</span>}
    </Link>
  );
};
function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      title: 'Home',
      icon: <Home size={20} className='min-w-[20px]' />,
      path: '/',
    },
    {
      title: 'Clients',
      icon: <Users size={20} className='min-w-[20px]' />,
      path: '/clients',
    },
    {
      title: 'Profile',
      icon: <User size={20} className='min-w-[20px]' />,
      path: '/profile',
    },
  ];

  return (
    <div className={`flex bg-gray-900 `}>
      {/* Sidebar */}
      <aside
        className={`
        ${isOpen ? 'w-64' : 'w-16'} 
        bg-gray-800 text-white transition-all duration-300 ease-in-out relative
      `}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
          absolute -right-3 top-4 bg-gray-800 hover:bg-gray-700 text-inherit p-1 rounded-full z-50
        `}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Sidebar Header */}
        <div className='p-4 flex items-center justify-between'>
          {isOpen && <h2 className='text-xl font-bold'>Dashboard</h2>}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className='mt-8'>
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              item={item}
              isOpen={isOpen}
              isDark={isDark}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col transition-colors duration-300 ${
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      >
        <Header />
        <div className='p-8 flex-1'>
          <div
            className={`${
              isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            } rounded-lg shadow-lg`}
          >
            <div className='p-6'>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
