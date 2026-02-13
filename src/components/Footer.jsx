import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-yy-black/5 flex flex-col items-center justify-center text-center space-y-8 relative z-10">
      
      {/* Botão de Contato Único */}
      <Link 
        to="/contato"
        className="group flex items-center space-x-3 bg-yy-black text-yy-bg px-8 py-4 rounded-full hover:scale-105 transition-all shadow-xl"
      >
        <Mail size={18} />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Contato</span>
      </Link>
      
      <div className="space-y-2 pt-4">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-yy-black">YINYANG RECORDS</p>
        <p className="text-[9px] text-yy-muted uppercase tracking-widest">
          © {new Date().getFullYear()} Yuri Fernandes & Guilherme Assunção. Todos os direitos reservados.
        </p>
      </div>
      
      <div className="opacity-10">
        <div className="w-12 h-[1px] bg-yy-black mx-auto"></div>
      </div>
    </footer>
  );
};

export default Footer;
