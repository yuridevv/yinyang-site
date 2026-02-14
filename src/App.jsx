import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import WaveBackground from './components/WaveBackground';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Listen from './pages/Listen';
import Discography from './pages/Discography';
import Artists from './pages/Artists';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-yy-black selection:text-yy-bg relative overflow-hidden flex flex-col">
        <ScrollToTop />
        <WaveBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <Sidebar />
          
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/ouvir" element={<Listen />} />
                <Route path="/discografia" element={<Discography />} />
                <Route path="/artistas" element={<Artists />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
