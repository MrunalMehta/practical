import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { useTheme } from '../contexts/ThemeContext';
import { FormattedMessage } from 'react-intl';

const sessionData = [
  {
    name: <FormattedMessage id='chart.sessionsByChannel.assigned' />,
    value: 33,
    color: '#ef4444',
  },
  {
    name: <FormattedMessage id='chart.sessionsByChannel.notAssigned' />,
    value: 33,
    color: '#22c55e',
  },
  {
    name: <FormattedMessage id='chart.sessionsByChannel.reAssigned' />,
    value: 34,
    color: '#eab308',
  },
];

function SessionsChart() {
  const { isDark } = useTheme();
  return (
    <div
      className={`${
        isDark ? 'bg-gray-800' : 'bg-white'
      } rounded-lg shadow-sm p-6`}
    >
      <h2
        className={`${
          isDark ? 'text-white' : 'text-gray-800'
        } text-lg font-semibold mb-6`}
      >
        <FormattedMessage id='chart.sessionsByChannel' />
      </h2>
      <div className='h-48'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={sessionData}
              cx='50%'
              cy='50%'
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey='value'
            >
              {sessionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='space-y-3 mt-4'>
        {sessionData.map((item, index) => (
          <div key={index} className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div
                className='w-3 h-3 rounded-full'
                style={{ backgroundColor: item.color }}
              ></div>
              <span
                className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}
              >
                {item.name}
              </span>
            </div>
            <span
              className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}
            >
              {item.value}%
            </span>
          </div>
        ))}
      </div>

      <div className='mt-6 text-center'>
        <div
          className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        >
          8,234
        </div>
        <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}>
          <FormattedMessage id='chart.sessionsByChannel.totalSessions' />
        </div>
      </div>
    </div>
  );
}

export default SessionsChart;
