import { useTheme } from '../contexts/ThemeContext';
import PerformanceIndicator from '../components/PerformanceIndicator';
import SessionsChart from '../components/SessionsChart';
import DataListing from '../components/DataListing';
import DataProvider from '../contexts/DataContext';

function Home() {
  const { isDark } = useTheme();

  return (
    <div className={`space-y-6 p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <PerformanceIndicator />
        <SessionsChart />
      </div>
      <DataProvider>
        <DataListing />
      </DataProvider>
    </div>
  );
}

export default Home;
