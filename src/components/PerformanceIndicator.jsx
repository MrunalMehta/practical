import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import Button from './Generic/Button';
import { useTheme } from '../contexts/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';

function PerformanceIndicator() {
  const intl = useIntl();
  const performanceData = [
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.jan' }),
      complaints: 160,
      taskDone: 120,
      attends: 100,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.feb' }),
      complaints: 140,
      taskDone: 130,
      attends: 110,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.mar' }),
      complaints: 180,
      taskDone: 140,
      attends: 120,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.apr' }),
      complaints: 140,
      taskDone: 120,
      attends: 100,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.may' }),
      complaints: 160,
      taskDone: 130,
      attends: 110,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.jun' }),
      complaints: 150,
      taskDone: 120,
      attends: 90,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.jul' }),
      complaints: 170,
      taskDone: 140,
      attends: 120,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.aug' }),
      complaints: 160,
      taskDone: 130,
      attends: 110,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.sep' }),
      complaints: 180,
      taskDone: 150,
      attends: 130,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.oct' }),
      complaints: 170,
      taskDone: 140,
      attends: 120,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.nov' }),
      complaints: 160,
      taskDone: 130,
      attends: 110,
    },
    {
      name: intl.formatMessage({ id: 'chart.performanceIndicator.dec' }),
      complaints: 180,
      taskDone: 150,
      attends: 130,
    },
  ];
  const { isDark } = useTheme();
  return (
    <div
      className={`xl:col-span-2 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } rounded-lg shadow-sm p-6`}
    >
      <div className='flex flex-wrap justify-between items-start mb-6'>
        <h2
          className={`${
            isDark ? 'text-white' : 'text-gray-800'
          } text-lg font-semibold`}
        >
          <FormattedMessage id='chart.performanceIndicator' />
        </h2>
        <div className='flex gap-4 text-sm'>
          {['7D', '2w', '1M', '3M', '6M'].map((period, index) => (
            <Button
              key={period}
              className={
                index === 0
                  ? 'text-blue-500'
                  : isDark
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-600'
              }
              btnLabel={period}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-wrap gap-6 mb-4'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-cyan-400'></div>
          <span
            className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}
          >
            <FormattedMessage id='chart.performanceIndicator.complaints' />{' '}
            (2098)
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-purple-500'></div>
          <span
            className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}
          >
            <FormattedMessage id='chart.performanceIndicator.taskDone' /> (1123)
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-red-400'></div>
          <span
            className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}
          >
            <FormattedMessage id='chart.performanceIndicator.attends' /> (876)
          </span>
        </div>
      </div>

      <div className='h-64'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={performanceData} barGap={0} barSize={8}>
            <CartesianGrid
              strokeDasharray='3 3'
              stroke='#f0f0f0'
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey='name'
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999999', fontSize: 12 }}
              // padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999999', fontSize: 12 }}
              domain={[0, 100]}
              ticks={[
                0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325,
                350, 375, 400, 425, 450, 475, 500,
              ]}
            />
            <Bar
              dataKey='complaints'
              stackId='a'
              fill='#4bd3ee'
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey='taskDone'
              stackId='a'
              fill='#A389D4'
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey='attends'
              stackId='a'
              fill='#F68D8D'
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceIndicator;
