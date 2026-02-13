import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Disc, Calendar, User, Music } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageWrapper from '../components/PageWrapper';

const Discography = () => {
  const albums = [
    { 
      id: 1,
      title: "FINAL VERSION VOL. 1", 
      author: "Yuro",
      releaseDate: "13 Out 2025", 
      type: "ALBUM",
      cover: "/Images/Discography/final-version-vol-1.jpg" // ADICIONE A URL DA IMAGEM AQUI
    },
    { 
      id: 2, 
            title: "MAQUIAGEM", 
      author: "Yuro & Yellow", 
      releaseDate: "27 Fev 2026", 
      type: "SINGLE",
      cover: "/Images/Discography/maquiagem.jpg" // CAMINHO CORRETO (A imagem deve estar em public/Images/Discography/maquiagem.jpg)
    },
    { 
      id: 3, 
      title: "LOVE THIS SONG", 
      author: "Yellow & Yuro", 
      releaseDate: "TBA", 
      type: "SINGLE",
      cover: "/Images/Discography/love-this-song.jpg" // ADICIONE A URL DA IMAGEM AQUI
    },
    { 
      id: 4, 
      title: "LITTLE ANGEL", 
      author: "Yellow", 
      releaseDate: "TBA", 
      type: "EP",
      cover: "/Images/Discography/little-angel.jpg" // ADICIONE A URL DA IMAGEM AQUI
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-8 min-h-screen max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-24 relative">
          
          {/* Vinyl Display */}
          <div className="flex-1 relative flex justify-center items-center min-h-[600px] w-full">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex items-center justify-center w-full"
                >
                   {/* 
                      CAPA DO ÁLBUM 
                      Se albums[current].cover estiver vazio, ele mostra o Placeholder.
                   */}
                   <div className="w-72 h-72 md:w-[500px] md:h-[500px] bg-white p-2 shadow-2xl relative z-10 hand-drawn-border flex-shrink-0">
                      {albums[current].cover ? (
                        <img 
                          src={albums[current].cover} 
                          alt={albums[current].title} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <ImagePlaceholder text={albums[current].title} className="h-full w-full border-none" />
                      )}
                      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                   </div>
                   
                   {/* O Disco */}
                   <motion.div 
                    initial={{ x: 0, rotate: 0 }}
                    animate={{ x: 80, rotate: 360 }}
                    transition={{ duration: 1.5, ease: "easeOut", rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
                    className="absolute right-[5%] md:right-[10%] w-64 h-64 md:w-[480px] md:h-[480px] rounded-full bg-yy-black shadow-2xl z-0 border-[12px] border-white/5 flex items-center justify-center"
                   >
                      <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border border-white/10 flex items-center justify-center">
                         <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                      </div>
                   </motion.div>
                </motion.div>
             </AnimatePresence>
          </div>

          {/* Dados do Catálogo */}
          <div className="w-full lg:w-96 space-y-12 bg-yy-bg/50 backdrop-blur-sm p-8 lg:p-0 rounded-2xl relative z-20">
             <div className="space-y-6">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.4em] text-yy-muted uppercase">
                   <span>Lançamento</span>
                   <span>#{albums[current].id}</span>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-none text-yy-black">
                    {albums[current].title}
                  </h2>
                  
                  {/* TEXTO EM DESTAQUE: AUTOR E DATA */}
                  <div className="bg-yy-black text-yy-bg px-4 py-3 hand-drawn-border inline-block rotate-[-1deg] shadow-lg">
                    <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest">
                      <div className="flex items-center">
                        <User size={12} className="mr-2 text-yy-muted" />
                        {albums[current].author}
                      </div>
                      <div className="w-px h-3 bg-yy-bg/20"></div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-2 text-yy-muted" />
                        {albums[current].releaseDate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-1 w-20 bg-yy-black/10"></div>
             </div>

             <div className="space-y-6 text-yy-black/70">
                <p className="text-lg leading-relaxed italic">
                  Uma exploração visceral da nossa identidade. Cada sulco deste disco carrega o equilíbrio entre o Yuro e o Yellow.
                </p>
                <div className="flex items-center space-x-3 opacity-40 text-[10px] font-bold uppercase tracking-widest">
                   <Music size={14} />
                   <span>{albums[current].type} — Y&Y LABEL</span>
                </div>
             </div>

             <div className="flex space-x-4">
                <button 
                  onClick={() => setCurrent(p => (p - 1 + albums.length) % albums.length)}
                  className="flex-1 py-6 border border-yy-black/20 hover:bg-yy-black hover:text-yy-bg transition-all rounded-sm flex items-center justify-center group"
                >
                  <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setCurrent(p => (p + 1) % albums.length)}
                  className="flex-1 py-6 border border-yy-black/20 hover:bg-yy-black hover:text-yy-bg transition-all rounded-sm flex items-center justify-center group"
                >
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Discography;
