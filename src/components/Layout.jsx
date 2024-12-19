import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';

const NavLink = ({ item, isOpen, isDark }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`
        w-full flex items-center p-4 transition-colors ${
          isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
        }
        ${isActive ? (isDark ? 'bg-gray-700' : 'hover:bg-gray-100') : ''}
      `}
    >
      {item.icon}
      {isOpen && <span className='ml-4'>{item.title}</span>}
    </Link>
  );
};

NavLink.propTypes = {
  isDark: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};
function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`flex-1 flex flex-col transition-colors duration-300 w-[calc(100%-264px)] ${
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      >
        <Header />
        <div className='flex-1'>
          <div
            className={`${
              isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            } rounded-lg`}
          >
            <div>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
