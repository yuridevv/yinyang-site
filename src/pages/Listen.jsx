import { Play, Pause, Disc, ExternalLink, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useLanguage } from '../context/LanguageContext';

const Listen = () => {
  const { lang } = useLanguage();

  const tracks = [
    { id: 1, title: "MAQUIAGEM", artist: "Yuro & Yellow", url: "/Music/maquiagem.mp3", rotate: "-2deg", links: [{ label: { pt: "PRE-SAVE", en: "PRE-SAVE" }, url: "https://ditto.fm/maquiagem-yellow" }] },
    { id: 2, title: "QUER SABER SE EU PRESTO", artist: "Yellow", url: "/Music/quer_saber_se_eu_presto.mp3", rotate: "1deg", links: [{label: {pt:"EM BREVE", en: "COMING SOON"}}] },
    { id: 3, title: "BAREFOOT", artist: "Yuro", url: "/Music/barefoot.mp3", rotate: "-1deg", links: [{label: {pt:"EM BREVE (de novo)", en: "COMING SOON (again)"}}]},
    { id: 4, title: "LOVE THIS SONG", artist: "Yuro & Yellow", url: "/Music/love_this_song.mp3", rotate: "3deg",  links: [{label: {pt:"EM BREVE", en: "COMING SOON"}}]},
  ];

  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const t = {
    pt: { title: "NOSSA MÚSICA:", subtitle: "PREVIEWS", footer: "YINYANG" },
    en: { title: "OUR MUSIC:", subtitle: "PREVIEWS", footer: "YINYANG" }
  }[lang];

  const togglePlay = (track) => {
    if (currentTrackId === track.id) {
      if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
      else { audioRef.current.play(); setIsPlaying(true); }
    } else {
      audioRef.current.src = track.url;
      audioRef.current.play();
      setCurrentTrackId(track.id);
      setIsPlaying(true);
    }
  };

  useEffect(() => { return () => { audioRef.current.pause(); } }, []);

  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-12 min-h-screen">
        <div className="max-w-4xl mx-auto mb-20 flex justify-between items-end border-b border-yy-black/10 pb-8">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase">{t.title}</h2>
          <p className="text-[10px] font-bold tracking-[0.5em] text-yy-muted uppercase">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {tracks.map((track) => (
            <motion.div 
              key={track.id}
              whileHover={{ scale: 1.02, rotate: 0 }}
              style={{ rotate: track.rotate }}
              className={`p-8 bg-white shadow-xl hand-drawn-border transition-all duration-500 border border-yy-black/5 flex flex-col justify-between min-h-[300px] ${
                currentTrackId === track.id && isPlaying ? 'ring-2 ring-yy-black' : ''
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-8">
                   <div onClick={() => togglePlay(track)} className={`w-14 h-14 rounded-full border-2 border-yy-black/10 flex items-center justify-center cursor-pointer hover:bg-yy-black hover:text-yy-bg transition-all ${currentTrackId === track.id && isPlaying ? 'animate-spin-slow' : ''}`}>
                      {currentTrackId === track.id && isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                   </div>
                   <span className="text-[9px] font-bold text-yy-muted uppercase tracking-widest italic">Y&Y</span>
                </div>
                <div>
                   <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase">{track.title}</h3>
                   <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-6">{track.artist}</p>
                   {track.links.length > 0 && (
                     <div className="flex flex-wrap gap-3 mt-4">
                        {track.links.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest bg-yy-black text-yy-bg px-4 py-2 rounded-full flex items-center hover:scale-105 transition-transform">
                            <ExternalLink size={10} className="mr-2" /> {link.label[lang]}
                          </a>
                        ))}
                     </div>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-40 text-center opacity-20">
           <p className="font-display text-[8px] tracking-[1em] uppercase flex items-center justify-center">
             <Music size={12} className="mr-4" /> {t.footer}
           </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Listen;
