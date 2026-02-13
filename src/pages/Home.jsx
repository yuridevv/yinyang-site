import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Asterisk, Sparkles, Waves, Music, Disc, Users } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const navButtons = [
    { label: "Ouvir", path: "/ouvir", icon: <Music size={20} /> },
    { label: "Discografia", path: "/discografia", icon: <Disc size={20} /> },
    { label: "Artistas", path: "/artistas", icon: <Users size={20} /> },
  ];

  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="relative mb-60">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="z-10 lg:w-1/2"
            >
              <div className="flex items-center space-x-4 mb-6 text-yy-muted">
                <Asterisk className="animate-spin-slow" size={24} />
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Gravadora Independente</span>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] mb-8 text-yy-black">
                YIN<br/>YANG
              </h1>
              <p className="text-xl md:text-2xl italic text-yy-muted max-w-md leading-relaxed">
                "Onde o contraste deixa de ser diferença e se torna identidade."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative lg:w-1/2"
            >
              {/* 
                 ESPAÇO PARA IMAGEM PRINCIPAL (Y&Y UNIFIED)
                 Para substituir: Troque <ImagePlaceholder /> pela sua tag <img src="..." />
              */}
              <div className="relative z-10 hand-drawn-border overflow-hidden shadow-2xl rotate-2">
                <img src="/Images/Home/cronos.jpg" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yy-black text-yy-bg rounded-full flex items-center justify-center rotate-[-12deg] shadow-xl border-4 border-yy-bg">
                <Waves size={48} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="grid grid-cols-12 gap-12 items-center mb-60">
          <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Sparkles className="text-yy-muted mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4 italic uppercase text-yy-black">Contraste & Equilíbrio</h3>
            <p className="text-sm text-yy-muted leading-relaxed">
              Yuro traz a atmosfera. Yellow traz o impacto. <br/> 
              Dois opostos construindo um só universo.
            </p>
          </div>
          
          <div className="col-span-12 lg:col-span-8">
            <div className="h-px w-full bg-yy-black/10 mb-12"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['TRAP', 'R&B', 'ALT', 'EXP'].map((genre) => (
                <div key={genre} className="flex flex-col items-center">
                  <span className="text-3xl font-black mb-2 text-yy-black">{genre}</span>
                  <div className="w-2 h-2 bg-yy-black rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NAVEGAÇÃO FINAL DA HOME */}
        <section className="mt-40 border-t border-yy-black/5 pt-20">
          <h2 className="text-center text-4xl font-black italic mb-16 tracking-tighter uppercase text-yy-black">Explore o Universo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navButtons.map((btn, i) => (
              <motion.div key={i} whileHover={{ y: -10 }}>
                <Link 
                  to={btn.path}
                  className="bg-white border border-yy-black/10 p-12 hand-drawn-border shadow-xl flex flex-col items-center group hover:bg-yy-black transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-yy-bg rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-yy-black">
                    {btn.icon}
                  </div>
                  <span className="text-xl font-black italic uppercase tracking-tighter group-hover:text-yy-bg transition-colors">
                    {btn.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
