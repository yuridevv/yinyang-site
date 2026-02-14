import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();

  const t = {
    pt: {
      title: "CONTATE A GENTE.",
      quote: "Mande uma ideia de feat, um beat, ou só um oi. A gente responde rapidinho.",
      label: "Linha Direta Y&Y",
      location: "São Paulo — Mundial",
      depts: [
        { label: "YINYANG", info: "Sem email oficial ainda" },
        { label: "YURO", info: "contatoyurifernandes@gmail.com" },
        { label: "YELLOW", info: "guilhermeassuncaobr@gmail.com" }
      ]
    },
    en: {
      title: "CONTACT US.",
      quote: "Send us a collab idea, a beat, or just say hi. We reply fast.",
      label: "Y&Y Direct Line",
      location: "São Paulo — Worldwide",
      depts: [
        { label: "YINYANG", info: "No official email yet" },
        { label: "YURO", info: "contatoyurifernandes@gmail.com" },
        { label: "YELLOW", info: "guilhermeassuncaobr@gmail.com" }
      ]
    }
  }[lang];

  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-12 min-h-screen max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/2">
             <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter italic uppercase">{t.title}</h1>
             <p className="text-2xl text-yy-muted leading-relaxed italic max-w-sm mb-12">{t.quote}</p>
             <div className="flex items-center space-x-6 text-yy-black/20">
                <MessageSquare size={40} />
                <div className="h-px w-32 bg-current"></div>
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase">{t.label}</span>
             </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-8">
             {t.depts.map((c, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ delay: i * 0.1 }} 
                 className={`p-10 hand-drawn-border shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 cursor-pointer group transition-all hover:scale-[1.02] ${i === 0 ? 'bg-yy-black text-yy-bg' : 'bg-white text-yy-black border border-yy-black/10'}`}
               >
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-50 block mb-4">{c.label}</span>
                    <p className="text-2xl font-black tracking-tight">{c.info}</p>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all" size={28} />
               </motion.div>
             ))}
             <div className="pt-12 text-center opacity-30">
                <p className="text-[10px] font-bold tracking-[0.8em] uppercase italic">{t.location}</p>
             </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
