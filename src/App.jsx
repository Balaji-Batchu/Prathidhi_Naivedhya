import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Mobile = lazy(() => import('./pages/Mobile'));
const Donate = lazy(() => import('./pages/Donate'));
const Mission = lazy(() => import('./pages/Mission'));
const Contact = lazy(() => import('./pages/Contact'));
const Register_login = lazy(() => import('./components/Register_login'));
const Register_login_Organisation = lazy(() => import('./components/Register_Login_organisation'));

import './App.css'
import Test from './pages/Test';


function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {isMobile ? (
          <div className="mobile-view-message">
            <Mobile />
          </div>
        ) : (
          <Suspense fallback={<Test />}>
            <Navbar />
            <Routes>
              <Route path="/test" element={<Test />} />
              <Route path="/" element={<Home />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/register" element={<Register_login />} />
              <Route path="/register-organisation" element={<Register_login_Organisation />} />
            </Routes>
            <Footer />
          </Suspense>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
