import { Bell, Search, ShoppingCart } from 'lucide-react';
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
// import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const { isDark } = useContext(ThemeContext);
  return (
    <header className={`
      w-full border-b transition-colors
      ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
    `}>
      {/* Main Header */}
      <div className="px-4 lg:px-6 py-4">
        <div className="flex justify-end lg:items-center lg:justify-between">
          {/* Welcome message - visible only on laptop and above */}
          <h1 className={`text-xl ${isDark ? 'text-white' : 'text-gray-800'} hidden lg:block`}>
            Welcome stellar dashboard!
          </h1>

          {/* Mobile Menu Button */}
          {/* <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
          </button> */}

          {/* Right side - Desktop Actions */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            {/* Search */}
            {/* <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className={`
                  pl-10 pr-4 py-2 rounded-lg w-48 lg:w-64
                  ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}
                  ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}
                  focus:outline-none
                  ${isDark ? 'focus:ring-2 focus:ring-blue-500' : 'focus:ring-2 focus:ring-blue-400'}
                `}
              />
              <Search className={`absolute left-3 top-2.5 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            </div> */}

            {/* Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className={`relative p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Search className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <button className={`relative p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <ShoppingCart className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <button className={`relative p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Bell className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>

            {/* Language Selector */}
            <div className="hidden lg:flex items-center gap-2">
              <img src="/us-flag.png" alt="US" className="w-5 h-5" />
              <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>English</span>
            </div>

            {/* Profile - visible only on laptop and above */}
            <div className="hidden lg:flex items-center gap-3">
              <img
                src="https://via.placeholder.com/32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>
                Henry Klein
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
