import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Profile from './pages/Profile';
import Clients from './pages/Clients';
import { IntlProvider } from 'react-intl';
import enMessages from './locales/en.json';
import deMessages from './locales/de.json';
import { useTheme } from './contexts/ThemeContext';

const messages = {
  en: enMessages,
  de: deMessages,
};

function App() {
  const { locale } = useTheme();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className='h-screen'>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Layout>
      </div>
    </IntlProvider>
  );
}

export default App;
