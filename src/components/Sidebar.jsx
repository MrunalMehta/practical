import PropTypes from 'prop-types';
import { Home, Menu, Moon, Sun, User, Users, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Button from './Generic/Button';
import { FormattedMessage, useIntl } from 'react-intl';
import NavLink from './NavLink';
function Sidebar({ isOpen, setIsOpen }) {
  const intl = useIntl();
  const menuItems = [
    {
      title: intl.formatMessage({ id: 'sideBar.title.home' }),
      icon: <Home size={20} className='min-w-[20px]' />,
      path: '/',
    },
    {
      title: intl.formatMessage({ id: 'sideBar.title.clients' }),
      icon: <Users size={20} className='min-w-[20px]' />,
      path: '/clients',
    },
    {
      title: intl.formatMessage({ id: 'sideBar.title.profile' }),
      icon: <User size={20} className='min-w-[20px]' />,
      path: '/profile',
    },
  ];
  const { isDark, toggleTheme } = useTheme();
  return (
    <aside
      className={`
    ${isOpen ? 'w-64' : 'w-16'} 
    ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}
     transition-all duration-300 ease-in-out relative shrink-0
  `}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
      absolute -right-3 top-5 ${
        isDark ? 'hover:bg-gray-700' : ' hover:bg-gray-100'
      } text-inherit p-1 rounded-full z-50
    `}
        btnLabel={isOpen ? <X size={20} /> : <Menu size={20} />}
      />

      <div className='p-4 flex items-center justify-between'>
        {isOpen && (
          <h2 className='text-xl font-bold'>
            {intl.formatMessage({ id: 'dashboard' })}
          </h2>
        )}
        <Button
          onClick={toggleTheme}
          className={`p-2 rounded-lg ${
            isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
          btnLabel={isDark ? <Sun size={20} /> : <Moon size={20} />}
        />
      </div>

      <nav className='mt-8'>
        <div className='flex items-center gap-3 p-4'>
          <img
            src='https://via.placeholder.com/32'
            alt='Profile'
            className='w-8 h-8 rounded-full'
          />
          {isOpen && (
            <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>
              <FormattedMessage id='profile.name' />
            </span>
          )}
        </div>
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
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
