import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';

import DefaultLayout from './layout/DefaultLayout';
import PageTitle from './components/PageTitle';
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/Nav/Login';

const hiddenOnRoutes = [
  '/',
  '/login',
  '/basic-info',
  '/home-address',
  '/social-security',
  '/social-security-error',
  '/terms-conditions',
];

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout pathname={pathname} hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Onboarding | SELS | SMART ELECTION LEDGER SYSTEM" />
              <OnboardingPage />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Login | SELS | SMART ELECTION LEDGER SYSTEM" />
              <LoginPage />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
