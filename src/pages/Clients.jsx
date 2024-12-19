import { useTheme } from '../contexts/ThemeContext';

function Clients() {
  const { isDark } = useTheme();
  return (
    <div
      className={`space-y-6 p-6 h-screen ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>Clients</div>
    </div>
  );
}

export default Clients;
