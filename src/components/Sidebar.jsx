/* eslint-disable react/prop-types */
import { Home, Menu, Moon, Sun, User, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, setIsOpen }) {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'Home', icon: <Home size={20} /> },
    { path: '/clients', name: 'Clients', icon: <Users size={20} /> },
    { path: '/profile', name: 'Profile', icon: <User size={20} /> },
  ];
  return (
    <>
    {!isOpen && <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-5 left-0 z-50 "
    >
      <Menu size={24} />
    </button>}

    <div className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-0'} 
      ${isDark ? 'bg-gray-900' : 'bg-white'} 
      transition-all duration-300 overflow-hidden z-40
      ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
      
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
          <span className="font-bold text-xl">Stellar</span>
        </div>
        <button onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
      onClick={() => setIsOpen(!isOpen)}
      className=" "
    >
      <Menu size={24} />
    </button>
      </div>

      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className='h-10 w-10 rounded-full relative'>
          <img src="https://img.freepik.com/free-photo/artist-white_1368-3543.jpg?semt=ais_hybrid" alt="Profile" className="object-cover rounded-full" />
          </div>
          <div>
            <h3 className="font-medium">Henry Klein</h3>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-2
              ${location.pathname === item.path ? 
                (isDark ? 'bg-gray-800' : 'bg-gray-200') : 
                'hover:bg-opacity-50'}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  </>
  )
}

export default Sidebar
