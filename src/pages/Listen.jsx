import { Play, Pause, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';

const Listen = () => {
  const tracks = [
    { id: 1, title: "MAQUIAGEM", artist: "Yuro & Yellow", url: "/Music/maquiagem.wav", rotate: "-2deg" },
    { id: 2, title: "QUER SABER SE EU PRESTO", artist: "Yellow", url: "/Music/quer_saber_se_eu_presto.wav", rotate: "1deg" },
    { id: 3, title: "BAREFOOT", artist: "Yuro", url: "/Music/barefoot.wav", rotate: "-1deg" },
    { id: 4, title: "LOVE THIS SONG", artist: "Yuro & Yellow", url: "/Music/love_this_song.mp3", rotate: "3deg" },
  ];

  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

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
          <h2 className="text-5xl font-black italic tracking-tighter">NOSSO SOM:</h2>
          <p className="text-[10px] font-bold tracking-[0.5em] text-yy-muted uppercase">PREVIEWS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {tracks.map((track) => (
            <motion.div 
              key={track.id}
              whileHover={{ scale: 1.02, rotate: 0 }}
              style={{ rotate: track.rotate }}
              className={`p-8 bg-white shadow-xl hand-drawn-border cursor-pointer transition-all duration-500 border border-yy-black/5 ${
                currentTrackId === track.id && isPlaying ? 'ring-2 ring-yy-black' : ''
              }`}
              onClick={() => togglePlay(track)}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-12">
                   <div className={`w-12 h-12 rounded-full border border-yy-black/10 flex items-center justify-center ${currentTrackId === track.id && isPlaying ? 'animate-spin-slow' : ''}`}>
                      <Disc size={20} className="opacity-40" />
                   </div>
                   <span className="text-[9px] font-bold text-yy-muted uppercase tracking-widest italic">Y&Y</span>
                </div>

                <div>
                   <h3 className="text-3xl font-black mb-2 tracking-tighter">{track.title}</h3>
                   <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-40">{track.artist}</p>
                      <div className="w-10 h-10 bg-yy-black text-yy-bg rounded-full flex items-center justify-center">
                        {currentTrackId === track.id && isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-1" />}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center opacity-20">
           <p className="font-display text-[8px] tracking-[1em] uppercase">Previews</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Listen;
