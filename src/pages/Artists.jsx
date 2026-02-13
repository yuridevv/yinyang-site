import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Music, ExternalLink, Hash } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageWrapper from '../components/PageWrapper';

// Ícone do TikTok customizado (Lucide às vezes não tem o ícone de marca perfeito)
const TikTokIcon = ({ size }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Artists = () => {
  const [active, setActive] = useState('YURO');
  
  const data = {
    YURO: {
      role: "O YIN / DIREÇÃO ARTÍSTICA",
      bio: "YURI FERNANDES, ou YURO, é o cérebro criativo por trás da YINYANG. Com uma visão artística única e um talento nato para a produção musical, Yuro é o yin que equilibra a energia de Yellow, trazendo profundidade, atmosfera e inovação para cada projeto que toca.",
      traits: ["Produção Musical", "Harmonias", "Atitude"],
      image: "/Images/Artists/yuro.jpg",
      bgColor: "#9ad4d8", // COR QUE COMBINA COM A FOTO DO YURO (Ajuste conforme sua imagem)
      social: [
        { icon: <Instagram size={18} />, label: "Instagram", url: "https://www.instagram.com/yuroblabla/" },
        { icon: <TikTokIcon size={18} />, label: "TikTok", url: "https://www.tiktok.com/@yuroblabla" },
        { icon: <Youtube size={18} />, label: "YouTube", url: "https://www.youtube.com/@yuroblablabla" }
      ]
    },
    YELLOW: {
      role: "O YANG / PERFORMANCE",
      bio: "GUILHERME ASSUNÇÃO, ou YELLOW, é a energia vibrante e carismática que dá vida ao projeto. Com uma presença magnética e um estilo único, Yellow é o equilíbrio perfeito para a visão artística de Yuro, trazendo luz e cor para o universo YINYANG.",
      traits: ["Carisma", "Ad-Libs", "Flow"],
      image: "/Images/Artists/yellow.jpg",
      bgColor: "#e6db71", // COR QUE COMBINA COM A FOTO DO YELLOW (Ajuste conforme sua imagem)
      social: [
        { icon: <Instagram size={18} />, label: "Instagram", url: "https://www.instagram.com/guiasssuncao_/" },
        { icon: <TikTokIcon size={18} />, label: "TikTok", url: "https://www.tiktok.com/@yellow.gbr" },
        { icon: <Youtube size={18} />, label: "YouTube", url: "#" }
      ]
    }
  };

  // Efeito para mudar o background dinamicamente
  useEffect(() => {
    const originalBg = "#f7f4ef"; // Cor padrão do site
    
    // Aplicando a cor diretamente no elemento body
    document.body.style.setProperty('background-color', data[active].bgColor, 'important');
    document.body.style.transition = "background-color 0.8s ease";

    return () => {
      // Resetando ao sair do componente ou trocar de artista
      document.body.style.setProperty('background-color', originalBg);
    };
  }, [active, data]);

  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-12 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Seletor de Perfil */}
          <div className="lg:w-64 space-y-12">
             <div className="flex items-center space-x-2 text-yy-muted">
               <Hash size={16} />
               <h1 className="text-4xl font-black italic tracking-tighter">PERFIS.</h1>
             </div>
             <div className="flex flex-col space-y-4">
                {['YURO', 'YELLOW'].map(name => (
                  <button
                    key={name}
                    onClick={() => setActive(name)}
                    className={`text-left text-3xl font-black transition-all flex items-center group ${
                      active === name ? 'opacity-100 translate-x-4' : 'opacity-20 hover:opacity-100'
                    }`}
                  >
                    {name}
                    {active === name && <ExternalLink size={16} className="ml-4 opacity-30" />}
                  </button>
                ))}
             </div>
             <div className="pt-12 border-t border-yy-black/10">
                <p className="text-[9px] font-bold tracking-[0.5em] text-yy-muted uppercase">Convergência Criativa</p>
             </div>
          </div>

          {/* Biografia Orgânica */}
          <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1 relative">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    className="h-[650px] w-full hand-drawn-border shadow-2xl overflow-hidden bg-yy-accent"
                  >
                    {/* 
                       ESPAÇO PARA IMAGEM DO ARTISTA 
                       Tenta carregar a imagem do objeto 'data', se não existir ou estiver vazia, mostra o Placeholder.
                    */}
                    {data[active].image ? (
                      <img 
                        src={data[active].image} 
                        alt={active} 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ImagePlaceholder text={active} className="h-full w-full border-none" />
                    )}
                  </motion.div>
                </AnimatePresence>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-yy-black text-yy-bg rounded-full flex items-center justify-center rotate-12 shadow-xl border-4 border-yy-bg">
                   <Music size={24} />
                </div>
             </div>

             <div className="lg:w-96 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-[0.4em] text-yy-muted uppercase mb-4">{data[active].role}</span>
                <h2 className="text-6xl font-black mb-8 tracking-tighter italic">{active}</h2>
                <p className="text-xl leading-relaxed italic text-yy-black/80 mb-12">
                  "{data[active].bio}"
                </p>
                
                <div className="grid grid-cols-1 gap-10">
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold tracking-[0.4em] text-yy-muted uppercase">Redes Sociais</p>
                     <div className="flex flex-wrap gap-4">
                        {data[active].social.map((s, idx) => (
                          <a 
                            key={idx} 
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white border border-yy-black/10 rounded-2xl hover:bg-yy-black hover:text-yy-bg transition-all shadow-sm flex items-center space-x-2 group"
                            title={s.label}
                          >
                            {s.icon}
                            <span className="text-[10px] font-black uppercase tracking-widest hidden group-hover:inline">{s.label}</span>
                          </a>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-4">
                     <p className="text-[10px] font-bold tracking-[0.4em] text-yy-muted uppercase">Especialidade</p>
                     <ul className="space-y-2">
                        {data[active].traits.map(t => (
                          <li key={t} className="text-sm font-bold flex items-center group cursor-default">
                             <div className="w-2 h-2 bg-yy-black rounded-full mr-3 group-hover:scale-150 transition-transform"></div> {t}
                          </li>
                        ))}
                     </ul>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Artists;
