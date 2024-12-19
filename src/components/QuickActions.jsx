import { CreditCard, ShoppingBag, Users } from 'lucide-react';
import { useDataContext } from '../contexts/DataContext';
import Button from './Generic/Button';
import { useTheme } from '../contexts/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';
function QuickActions() {
  const intl = useIntl();
  const quickActions = [
    {
      title: intl.formatMessage({
        id: 'quickActions.button.addClient',
      }),
      icon: <Users size={20} />,
    },
    {
      title: intl.formatMessage({
        id: 'quickActions.button.createQuote',
      }),
      icon: <CreditCard size={20} />,
    },
    {
      title: intl.formatMessage({
        id: 'quickActions.button.enterPayment',
      }),
      icon: <ShoppingBag size={20} />,
    },
    {
      title: intl.formatMessage({
        id: 'quickActions.button.createInvoice',
      }),
      icon: <CreditCard size={20} />,
    },
  ];
  const { isDark } = useTheme();
  const { setIsModalShow } = useDataContext();
  const handleModal = (title) => {
    if (
      title !==
      intl.formatMessage({
        id: 'quickActions.button.addClient',
      })
    ) {
      return;
    }
    setIsModalShow(true);
  };
  return (
    <div className='flex flex-col space-y-4'>
      <div className='w-full'>
        <div
          className={`${
            isDark ? 'bg-gray-800' : 'bg-white'
          } shadow rounded-lg overflow-hidden`}
        >
          <div
            className={`bg-gradient-to-r from-orange-400 to-orange-600 flex flex-col md:flex-row items-start md:items-center p-4 border-b ${
              isDark ? 'border-white' : 'border-gray-200'
            }`}
          >
            <h5
              className={`text-lg ${
                isDark ? 'text-white' : 'text-gray-800'
              } font-semibold mb-2 md:mb-0`}
            >
              <FormattedMessage id='quickActions.title' />
            </h5>
            <p
              className={`text-sm ${
                isDark ? 'text-white' : 'text-gray-800'
              } md:ml-auto flex items-center`}
            >
              <FormattedMessage id='quickActions.subtitle' />
              <i className='ml-1 icon-bulb'></i>
            </p>
          </div>
          <div className='flex flex-wrap'>
            {quickActions.map((action, index) => (
              <div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/4 p-4 text-center border-b ${
                  quickActions.length !== index + 1 ? 'border-r' : ''
                }`}
              >
                <Button
                  className={`flex items-center justify-center w-full ${
                    isDark ? 'text-white' : 'text-gray-500 hover:text-gray-600'
                  }`}
                  onClick={() => handleModal(action.title)}
                  btnLabel={
                    <>
                      {action.icon}
                      <span className='ml-2'>{action.title}</span>
                    </>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
