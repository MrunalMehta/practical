import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function NavLink({ item, isOpen, isDark }) {
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
}

export default NavLink;
NavLink.propTypes = {
  isDark: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};
