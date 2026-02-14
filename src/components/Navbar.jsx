import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();

  const links = [
    { name: lang === 'pt' ? 'Ouvir' : 'Listen', path: '/ouvir' },
    { name: lang === 'pt' ? 'Discografia' : 'Discography', path: '/discografia' },
    { name: lang === 'pt' ? 'Artistas' : 'Artists', path: '/artistas' },
    { name: lang === 'pt' ? 'Sobre' : 'About', path: '/sobre' },
    { name: lang === 'pt' ? 'Contato' : 'Contact', path: '/contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-12 px-12">
      <div className="flex justify-between items-start">
        <Link to="/" className="group">
          <h1 className="text-xl font-black leading-none tracking-tighter">YINYANG</h1>
          <p className="text-[8px] tracking-[0.6em] text-yy-muted mt-1 group-hover:text-yy-primary transition-colors uppercase">
            {lang === 'pt' ? 'Records' : 'Records'}
          </p>
        </Link>
        
        <div className="flex flex-col items-end space-y-4">
          <button 
            onClick={toggleLang}
            className="flex items-center space-x-2 bg-yy-black text-yy-bg px-3 py-1 rounded-full hover:scale-105 transition-all mb-4"
          >
            <Globe size={12} />
            <span className="text-[8px] font-black uppercase tracking-widest">
              {lang === 'pt' ? 'EN' : 'PT'}
            </span>
          </button>

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all ${
                location.pathname === link.path ? 'text-yy-primary' : 'text-yy-muted hover:text-yy-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
