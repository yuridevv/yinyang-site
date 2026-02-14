import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Disc, Calendar, User, Music, ExternalLink, Youtube } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageWrapper from '../components/PageWrapper';
import { useLanguage } from '../context/LanguageContext';

const SpotifyIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.223.367-.694.482-1.056.257-2.982-1.822-6.732-2.234-11.15-1.225-.419.095-.841-.173-.936-.591-.095-.419.173-.841.591-.936 4.846-1.108 9.001-.622 12.338 1.418.362.222.477.69.253 1.057zm1.473-3.258c-.281.456-.878.604-1.334.323-3.414-2.098-8.619-2.707-12.656-1.255-.512.184-1.077-.089-1.261-.601-.184-.512.089-1.077.601-1.261 4.612-1.664 10.354-1.002 14.327 1.454.456.281.604.878.323 1.334zm.139-3.403c-4.095-2.431-10.844-2.656-14.739-1.666-.629.19-1.282-.169-1.472-.798-.19-.629.169-1.282.798-1.472 4.484-1.361 11.943-1.1 16.673 1.708.564.335.751 1.064.416 1.628-.335.564-1.064.751-1.628.416z"/></svg>
);

const AppleMusicIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.057 12.892c.037 3.12 2.73 4.16 2.768 4.172-.025.087-.43 1.475-1.41 2.897-1.01 1.462-2.06 2.92-3.69 2.947-1.603.025-2.12-.957-3.953-.957-1.833 0-2.403.93-3.927.985-1.55.053-2.73-1.568-3.747-3.03-2.077-3-3.66-7.527-1.53-11.43 1.057-1.937 3.043-3.163 5.19-3.193 1.63-.025 3.167 1.1 4.167 1.1 1 0 2.853-1.347 4.787-1.153.81.033 3.083.327 4.543 2.463-.117.073-2.713 1.583-2.687 4.698zm-2.51-8.845c.873-1.057 1.463-2.523 1.303-3.987-1.257.05-2.783.837-3.683 1.893-.81.937-1.517 2.443-1.327 3.877 1.4.11 2.833-.727 3.707-1.783z"/>
  </svg>
);

const Discography = () => {
  const { lang } = useLanguage();

  const albums = [
    { 
      id: 1,
      title: "FINAL VERSION VOL. 1", 
      author: "Yuro",
      releaseDate: "13 Out 2025", 
      type: "ALBUM",
      cover: "/Images/Discography/final-version-vol-1.jpg",
      description: {
        pt: "Depois de um relacionamento complicado, YURO lança seu tão aguardado álbum de estreia, FINAL VERSION VOL. 1, um mergulho em suas etapas do relacionamento, do auge à queda.",
        en: "After a complicated relationship, YURO releases his long-awaited debut album, FINAL VERSION VOL. 1, a deep dive into his relationship stages, from peak to fall."
      },
      streaming: { spotify: "#", apple: "#", youtube: "#" },
      tracks: [
        { name: "Pagina 1 (prologue)", link: "#" },
        { name: "Farewell", link: "#" },
        { name: "New Party", link: "#" },
        { name: "Take a Bullet", link: "#" },
        { name: "Coffee Table (Interlude)", link: "#" },
        { name: "X.o", link: "#" },
        { name: "Barefoot", link: "#" },
        { name: "I Hope", link: "#" },
        { name: "You Are", link: "#" },
        { name: "Luz & Tempestade", link: "#" },
        { name: "Saudades De Um Período Que Passou", link: "#" },
        { name: "Crumbs", link: "#" },
        { name: "Lonely Rage", link: "#" },
        { name: "Cynical", link: "#" }
      ]
    },
    { 
      id: 2, 
      title: "MAQUIAGEM", 
      author: "Yuro & Yellow", 
      releaseDate: "27 Fev 2026", 
      type: "SINGLE",
      cover: "/Images/Discography/maquiagem.jpg",
      description: {
        pt: "Todos já enfrentamos mentiras, principalmente quando se trata de amor. O que o rosto bonitinho por baixo da maquiagem esconde?",
        en: "We've all faced lies, especially when it comes to love. What does the pretty face beneath the makeup hide?"
      },
      streaming: { spotify: "#", apple: "#", youtube: "#" },
      tracks: [{ name: "Maquiagem", link: "#" }]
    },
    { 
      id: 3, 
      title: "LOVE THIS SONG", 
      author: "Yellow & Yuro", 
      releaseDate: "TBA", 
      type: "SINGLE",
      cover: "/Images/Discography/love-this-song.jpg",
      description: {
        pt: "YURO & YELLOW embarcam na sensação que o vislumbre do sucesso proporciona. Cantando absurdos apenas pela diversão e musicalidade. Clássico.",
        en: "YURO & YELLOW embark on the sensation that a glimpse of success provides. Singing absurdities just for the fun and musicality. Classic."
      },
      streaming: { spotify: "#", apple: "#", youtube: "#" },
      tracks: [{ name: "Love This Song", link: "#" }]
    },
    { 
      id: 4, 
      title: "LITTLE ANGEL", 
      author: "Yellow", 
      releaseDate: "TBA", 
      type: "EP",
      cover: "/Images/Discography/little-angel.jpg",
      description: {
        pt: "O EP solo de estreia de Yellow, falando besteira. Bem do jeitinho dele...",
        en: "Yellow's solo debut EP, talking trash. Just his way..."
      },
      streaming: { spotify: "#", apple: "#", youtube: "#" },
      tracks: [{ name: "TBA", link: "#" }]
    },
  ];

  const [current, setCurrent] = useState(0);

  const labels = {
    pt: { release: "Lançamento", tracklist: "Faixas", label: "Y&Y LABEL" },
    en: { release: "Release", tracklist: "Tracklist", label: "Y&Y LABEL" }
  }[lang];

  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-8 min-h-screen max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-24 relative">
          
          <div className="flex-1 relative flex justify-center items-center min-h-[500px] w-full lg:sticky lg:top-48">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex items-center justify-center w-full"
                >
                   <div className="w-72 h-72 md:w-[500px] md:h-[500px] bg-white p-2 shadow-2xl relative z-10 hand-drawn-border flex-shrink-0">
                      {albums[current].cover ? (
                        <img src={albums[current].cover} alt={albums[current].title} className="h-full w-full object-cover" />
                      ) : (
                        <ImagePlaceholder text={albums[current].title} className="h-full w-full border-none" />
                      )}
                      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                   </div>
                   
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

          <div className="w-full lg:w-[450px] space-y-12 bg-yy-bg/50 backdrop-blur-sm p-8 lg:p-0 rounded-2xl relative z-20">
             <div className="space-y-6">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.4em] text-yy-muted uppercase">
                   <span>{labels.release}</span>
                   <span>#{albums[current].id}</span>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-none text-yy-black">{albums[current].title}</h2>
                  <div className="bg-yy-black text-yy-bg px-4 py-3 hand-drawn-border inline-block rotate-[-1deg] shadow-lg">
                    <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest">
                      <div className="flex items-center"><User size={12} className="mr-2 text-yy-muted" /> {albums[current].author}</div>
                      <div className="w-px h-3 bg-yy-bg/20"></div>
                      <div className="flex items-center"><Calendar size={12} className="mr-2 text-yy-muted" /> {albums[current].releaseDate}</div>
                    </div>
                  </div>
                </div>
                <div className="h-1 w-20 bg-yy-black/10"></div>
             </div>

             <div className="space-y-8">
                <div className="flex space-x-4">
                   <a href={albums[current].streaming.spotify} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yy-black text-yy-bg rounded-full flex items-center justify-center hover:scale-110 transition-all"><SpotifyIcon size={20} /></a>
                   <a href={albums[current].streaming.apple} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yy-black text-yy-bg rounded-full flex items-center justify-center hover:scale-110 transition-all"><AppleMusicIcon size={20} /></a>
                   <a href={albums[current].streaming.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yy-black text-yy-bg rounded-full flex items-center justify-center hover:scale-110 transition-all"><Youtube size={20} /></a>
                </div>

                <p className="text-lg leading-relaxed italic text-yy-black/70">{albums[current].description[lang]}</p>

                <div className="space-y-4">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-yy-muted flex items-center"><Disc size={14} className="mr-2" /> {labels.tracklist}</h3>
                   <div className="space-y-2 border-l border-yy-black/10 pl-4">
                      {albums[current].tracks.map((track, idx) => (
                        <a key={idx} href={track.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-2 hover:bg-yy-black/5 rounded-lg transition-all">
                          <span className="text-sm font-bold text-yy-black">{idx + 1}. {track.name}</span>
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ))}
                   </div>
                </div>

                <div className="flex items-center space-x-3 opacity-40 text-[10px] font-bold uppercase tracking-widest">
                   <Music size={14} />
                   <span>{albums[current].type} — {labels.label}</span>
                </div>
             </div>

             <div className="flex space-x-4">
                <button onClick={() => setCurrent(p => (p - 1 + albums.length) % albums.length)} className="flex-1 py-6 border border-yy-black/20 hover:bg-yy-black hover:text-yy-bg transition-all rounded-sm flex items-center justify-center group"><ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" /></button>
                <button onClick={() => setCurrent(p => (p + 1) % albums.length)} className="flex-1 py-6 border border-yy-black/20 hover:bg-yy-black hover:text-yy-bg transition-all rounded-sm flex items-center justify-center group"><ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" /></button>
             </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Discography;
