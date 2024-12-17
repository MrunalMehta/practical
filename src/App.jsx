import './App.css';
import { Route, Routes } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/home';
import Profile from './pages/Profile';
import Clients from './pages/Clients';

function App() {
  return (
   <ThemeProvider>
        <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </ThemeProvider>
  );
}

export default App;
