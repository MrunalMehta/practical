import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Button from '../components/Generic/Button';
import { useIntl } from 'react-intl';

function NotFound() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const intl = useIntl();
  return (
    <div
      className={`space-y-6 p-6 h-screen ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-4xl font-bold mb-4'>
          404 - {intl.formatMessage({ id: 'title.pageNotFound' })}
        </h1>
        <p className='mb-4'>
          {intl.formatMessage({ id: 'subTitle.pageNotFound' })}
        </p>
        <Button
          onClick={() => navigate('/')}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
          btnLabel={intl.formatMessage({ id: 'button.lable.goHome' })}
        />
      </div>
    </div>
  );
}

export default NotFound;
