import React, { PropsWithChildren } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import MotionDesigns from './pages/MotionDesigns';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import PostEditor from './pages/PostEditor';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Protected Route Wrapper
const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
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
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-neutral-950 text-white font-sans selection:bg-white selection:text-black">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LayoutWithNav><Home /></LayoutWithNav>} />
              <Route path="/services" element={<LayoutWithNav><Services /></LayoutWithNav>} />
              <Route path="/motion-designs" element={<LayoutWithNav><MotionDesigns /></LayoutWithNav>} />
              <Route path="/about" element={<LayoutWithNav><About /></LayoutWithNav>} />
              <Route path="/blog" element={<LayoutWithNav><Blog /></LayoutWithNav>} />
              <Route path="/blog/:id" element={<LayoutWithNav><BlogPost /></LayoutWithNav>} />
              <Route path="/contact" element={<LayoutWithNav><Contact /></LayoutWithNav>} />
              
              {/* Admin Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/new" element={
                <ProtectedRoute>
                  <PostEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/edit/:id" element={
                <ProtectedRoute>
                  <PostEditor />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;