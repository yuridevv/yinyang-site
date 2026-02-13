import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const links = [
    { name: 'Ouvir', path: '/ouvir' },
    { name: 'Discografia', path: '/discografia' },
    { name: 'Artistas', path: '/artistas' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-12 px-12">
      <div className="flex justify-between items-start">
        <Link to="/" className="group">
          <h1 className="text-xl font-black leading-none tracking-tighter">YINYANG</h1>
          <p className="text-[8px] tracking-[0.6em] text-yy-muted mt-1 group-hover:text-yy-primary transition-colors">RECORDS</p>
        </Link>
        
        <div className="flex flex-col items-end space-y-4">
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
