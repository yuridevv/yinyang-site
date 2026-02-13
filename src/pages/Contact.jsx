import { motion } from 'framer-motion';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
  const channels = [
    { label: "Bookings", info: "booking@yinyang.rec", color: "bg-yy-black text-yy-bg" },
    { label: "Imprensa", info: "press@yinyang.rec", color: "bg-white text-yy-black border border-yy-black/10" },
    { label: "Geral", info: "hello@yinyang.rec", color: "bg-white text-yy-black border border-yy-black/10" }
  ];

  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-12 min-h-screen max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          <div className="lg:w-1/2">
             <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter italic">CONEXÃO.</h1>
             <p className="text-2xl text-yy-muted leading-relaxed italic max-w-sm mb-12">
               "Mande uma frequência. Estamos sempre monitorando o sinal."
             </p>
             <div className="flex items-center space-x-6 text-yy-black/20">
                <MessageSquare size={40} />
                <div className="h-px w-32 bg-current"></div>
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase">Y&Y Direct Line</span>
             </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-8">
             {channels.map((c, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className={`p-10 hand-drawn-border shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 cursor-pointer group transition-all hover:scale-[1.02] ${c.color}`}
               >
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-50 block mb-4">{c.label}</span>
                    <p className="text-2xl font-black tracking-tight">{c.info}</p>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all" size={28} />
               </motion.div>
             ))}
             
             <div className="pt-12 text-center opacity-30">
                <p className="text-[10px] font-bold tracking-[0.8em] uppercase italic">São Paulo — Mundial</p>
             </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
