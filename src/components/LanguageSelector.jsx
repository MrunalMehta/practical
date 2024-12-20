import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Button from './Generic/Button';
import English from '../assets/english.svg';
import German from '../assets/german.svg';

const languages = [
  { code: 'en', name: 'English', flag: <img src={English} alt='english' /> },
  { code: 'de', name: 'German', flag: <img src={German} alt='german' /> },
];
function LanguageSelector() {
  const { isDark, locale, changeLanguage } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLanguage = languages.find((lang) => lang.code === locale);

  return (
    <div className='relative hidden lg:flex items-center gap-2'>
      {selectedLanguage.flag}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 border ${
          isDark
            ? 'bg-gray-800 border-white text-white'
            : 'bg-white border-gray-300 text-gray-800'
        } rounded px-2 py-1`}
        btnLabel={
          <>
            {selectedLanguage?.name}
            <span className='ml-1'>▼</span>
          </>
        }
      />
      {isOpen && (
        <div
          className={`absolute top-full mt-1 border ${
            isDark
              ? 'bg-gray-800 border-white text-white'
              : 'bg-white border-gray-300 text-gray-800'
          } rounded shadow-lg z-10`}
        >
          {languages.map((lang) => (
            <Button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 ${
                isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              } w-full text-left`}
              btnLabel={
                <>
                  {lang.flag}
                  {lang.name}
                </>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
