
import React, { PropsWithChildren } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
// Added missing import for MotionDesigns page
import MotionDesigns from './pages/MotionDesigns';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LayoutWithNav: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LayoutWithNav><Home /></LayoutWithNav>} />
            <Route path="/services" element={<LayoutWithNav><Services /></LayoutWithNav>} />
            <Route path="/motion-designs" element={<LayoutWithNav><MotionDesigns /></LayoutWithNav>} />
            <Route path="/about" element={<LayoutWithNav><About /></LayoutWithNav>} />
            <Route path="/contact" element={<LayoutWithNav><Contact /></LayoutWithNav>} />
            
            {/* Redirect any mismatch to home */}
            <Route path="*" element={<LayoutWithNav><Home /></LayoutWithNav>} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;