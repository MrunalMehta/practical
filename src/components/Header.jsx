import { Bell, Search, ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from './Generic/Button';
import LanguageSelector from './LanguageSelector';
import { FormattedMessage } from 'react-intl';

function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      className={`
      w-full border-b transition-colors
      ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
    `}
    >
      <div className='px-4 lg:px-6 py-4'>
        <div className='flex justify-end lg:items-center lg:justify-between'>
          <h1
            className={`text-xl ${
              isDark ? 'text-white' : 'text-gray-800'
            } hidden lg:block`}
          >
            <FormattedMessage id='welcome.msg' />
          </h1>

          <div className='flex items-center gap-2 md:gap-4 lg:gap-6'>
            <div className='flex items-center gap-2 md:gap-4'>
              <Button
                className={`relative p-2 rounded-lg ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                btnLabel={
                  <Search
                    className={`w-5 h-5 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  />
                }
              />
              <Button
                className={`relative p-2 rounded-lg ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                btnLabel={
                  <ShoppingCart
                    className={`w-5 h-5 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  />
                }
              />
              <Button
                className={`relative p-2 rounded-lg ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                btnLabel={
                  <>
                    <Bell
                      className={`w-5 h-5 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    />
                    <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
                  </>
                }
              />
            </div>

            <LanguageSelector />

            <div className='hidden lg:flex items-center gap-3'>
              <img
                src='https://via.placeholder.com/32'
                alt='Profile'
                className='w-8 h-8 rounded-full'
              />
              <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>
                <FormattedMessage id='profile.name' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
