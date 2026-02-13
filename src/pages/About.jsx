import { motion } from 'framer-motion';
import { History, Heart, Globe, Zap, Layers } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageWrapper from '../components/PageWrapper';

const About = () => {
  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-12 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 text-center relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-10">
                <History size={120} />
             </div>
             <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none italic mb-8 relative z-10">Y&Y.</h1>
             <p className="text-[10px] font-bold tracking-[0.6em] text-yy-muted uppercase flex items-center justify-center">
               <Layers size={14} className="mr-4" />
               Yuro & Yellow — A História
             </p>
          </div>

          <div className="space-y-40">
             {/* Origem */}
             <div className="flex flex-col md:flex-row gap-20 items-center">
                <div className="flex-1 order-2 md:order-1">
                   <div className="flex items-center space-x-4 mb-6 text-yy-black/20">
                      <Heart size={24} />
                      <div className="h-px w-12 bg-current"></div>
                   </div>
                   <h2 className="text-4xl font-black mb-8 italic">DOIS OPOSTOS. UM SÓ SOM.</h2>
                   <p className="text-xl leading-relaxed text-yy-muted mb-8 italic">
                     A YINYANG Records não nasceu de um plano de negócios. Nasceu da constatada amizade.
                   </p>
                   <p className="text-sm leading-relaxed text-yy-muted">
                     Yuro traz o experimental, o calmo, o visual. Yellow traz o intenso, o direto, o energético. Onde um silencia, o outro faz barulho. Onde um flutua, o outro pisa firme. Essa dualidade é o que define cada beat, cada rima e cada imagem que a gente coloca no mundo.
                   </p>
                </div>
                <div className="flex-1 order-1 md:order-2 shadow-2xl hand-drawn-border overflow-hidden group">
                   {/* 
                      ESPAÇO PARA IMAGEM (THE MEETING)
                      Para substituir: Troque <ImagePlaceholder /> pela sua tag <img src="..." />
                   */}
                  <img src="/Images/About/rede.jpg" />
                </div>
             </div>

             {/* Universo */}
             <div className="flex flex-col md:flex-row-reverse gap-20 items-center">
                <div className="flex-1">
                   <div className="flex items-center space-x-4 mb-6 text-yy-black/20">
                      <Globe size={24} />
                      <div className="h-px w-12 bg-current"></div>
                   </div>
                   <h2 className="text-4xl font-black mb-8 italic">O UNIVERSO YINYANG</h2>
                   <p className="text-xl leading-relaxed text-yy-muted mb-8 italic">
                     Mais do que uma label, somos um coletivo criativo onde o contraste vira identidade.
                   </p>
                   <p className="text-sm leading-relaxed text-yy-muted">
                     Nosso som transita entre o Trap, o R&B e o Alternativo. Mas o que importa não é o gênero, é a atmosfera. Queremos construir um mundo onde cada lançamento seja uma peça de um quebra-cabeça maior: a nossa evolução constante como amigos e artistas.
                   </p>
                </div>
                <div className="flex-1 shadow-2xl hand-drawn-border overflow-hidden rotate-[-2deg] group">
                   {/* 
                      ESPAÇO PARA IMAGEM (THE STUDIO)
                      Para substituir: Troque <ImagePlaceholder /> pela sua tag <img src="..." />
                   */}
                  <img src="/Images/About/yinyang.jpg" />
                </div>
             </div>
          </div>

          <div className="mt-40 pt-20 border-t border-yy-black/10 flex justify-between items-center text-[9px] font-bold tracking-[0.5em] text-yy-muted uppercase">
             <span className="flex items-center"><Heart size={12} className="mr-2" /> YURO</span>
             <span className="flex items-center"><Heart size={12} className="mr-2" /> &</span>
             <span className="flex items-center"><Heart size={12} className="mr-2" /> YELLOW</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
