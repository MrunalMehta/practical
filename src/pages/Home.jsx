 
import { useTheme } from "../contexts/ThemeContext";
import PerformanceIndicator from "../components/PerformanceIndicator";
import SessionsChart from "../components/SessionsChart";
import QuickActions from "../components/QuickActions";

function Home() {
  // const [searchText, setSearchText] = useState('');
  const { isDark } = useTheme();
  
  return (
    <div className={`space-y-6 p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <PerformanceIndicator />
      <SessionsChart/>
      
    </div>
    <QuickActions/>
    
  </div>
  )
}

export default Home
