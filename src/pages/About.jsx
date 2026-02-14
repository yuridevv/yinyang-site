import { motion } from 'framer-motion';
import { History, Heart, Globe, Zap, Layers } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageWrapper from '../components/PageWrapper';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { lang } = useLanguage();

  const t = {
    pt: {
      title: "Y&Y.",
      label: "YINYANG — A História",
      section1Title: "Início",
      section1Desc: "YINYANG não foi nem um pouco planejado. Ao notarem que usavamos moletons de cores opostas, um de preto e outro off-white, 'Yin Yang' começou a ser usado para se referir a nós como dupla. Gostamos tanto dessa dinâmica de opostos, que transformamos isso em um projeto. Yuri e Guilherme, YINYANG, uma dupla de artistas lançando pelo mesmo nome. Mas percebemos que não fazia sentido, porque eramos muito diferentes e isso ia ser um limitador. Então cada um seguiu seu caminho de artista solo. E depois de alguns eventos, rolês, brigas e reconciliações, percebemos que no fundo, mesmo diferentes, eramos muito parecidos. Então fizemos nosso primeiro projeto junto 'MAQUIAGEM', e a partir disso, YINYANG se tornou um coletivo criativo, uma gravadora independente. Um hub totalmente nosso. Então no fim, Yuro, Yellow, YINYANG e Y&Y são a mesma coisa.",
      section2Title: "ESTILO",
      section2Desc: "Definir YINYANG com um estilo, gênero e até idioma só, é um erro. Fazemos o que queremos, do jeito que queremos, e essa é a coisa boa em ser independente. Mas se fosse pra definir, fazemos R&B, Rap, Boombap, Alternativo, Indie Rock, etc. Só não fazemos música em espanhol porque não sabemos falar.",
      section3Title: "OBJETIVO",
      section3Desc: "Nosso objetivo número um é: fazer músicas boas e mostrá-las para o mundo. Se essa ideia crescer, mais artistas entrarem no YINYANG e acabar da gente ficar conhecido mundialmente e milionários, perfeito. Mas no momento a gente só quer se divertir fazendo as nossas músicas, fazer feats com artistas tão únicos quanto nós e aproveitar.",
      footer: ["Amizade", "Contraste", "Evolução"]
    },
    en: {
      title: "Y&Y.",
      label: "YINYANG — The History",
      section1Title: "Beginning",
      section1Desc: "YINYANG was not planned at all. When they noticed that they were wearing opposite colored hoodies, one black and the other off-white, 'Yin Yang' started being used to refer to them as a duo. They liked this dynamic of opposites so much that they turned it into a project. Yuri and Guilherme, YINYANG, a duo of artists releasing under the same name. But they realized it didn't make sense because they were very different and that would be a limiter. So each one followed their own solo artist path. And after some events, outings, fights and reconciliations, they realized that deep down, even though different, they were very similar. So they made their first project together 'MAQUIAGEM', and from that on, YINYANG became a creative collective, an independent record label. A hub totally theirs. So in the end, Yuro, Yellow, YINYANG and Y&Y are the same thing.",
      section2Title: "STYLE",
      section2Desc: "Defining YINYANG with a single style, genre and even language is a mistake. We do what we want, the way we want, and that's the good thing about being independent. But if we had to define it, we make R&B, Rap, Boombap, Alternative, Indie Rock, etc. We just don't make music in Spanish because we don't know how to speak it.",
      section3Title: "GOAL",
      section3Desc: "Our number one goal is: to make good music and show it to the world. If this idea grows, more artists join YINYANG and we end up becoming known worldwide and millionaires, perfect. But at the moment we just want to have fun making our music, doing feats with artists as unique as us and enjoying it.",
      footer: ["Friendship", "Contrast", "Evolution"]
    }
  }[lang];

  return (
    <PageWrapper>
      <div className="pt-48 pb-32 px-12 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 text-center relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-10"><History size={120} /></div>
             <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none italic mb-8 relative z-10">{t.title}</h1>
             <p className="text-[10px] font-bold tracking-[0.6em] text-yy-muted uppercase flex items-center justify-center"><Layers size={14} className="mr-4" /> {t.label}</p>
          </div>

          <div className="space-y-40">
             {/* Seção 1 */}
             <div className="flex flex-col md:flex-row gap-20 items-center">
                <div className="flex-1 order-2 md:order-1">
                   <div className="flex items-center space-x-4 mb-6 text-yy-black/20"><Heart size={24} /><div className="h-px w-12 bg-current"></div></div>
                   <h2 className="text-4xl font-black mb-8 italic uppercase">{t.section1Title}</h2>
                   <p className="text-sm leading-relaxed text-yy-muted">{t.section1Desc}</p>
                </div>
                <div className="flex-1 order-1 md:order-2 shadow-2xl hand-drawn-border overflow-hidden group">
                   <img 
                    src="/Images/About/meeting.jpg" 
                    alt="Y&Y Meeting" 
                    className="h-[500px] w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                   />
                   <div style={{display: 'none'}} className="h-[500px] w-full"><img src="/Images/About/rede.jpg" alt="Y&Y Unified" className="h-full w-full object-cover" /></div>
                </div>
             </div>

             {/* Seção 2 e 3 agrupadas para fluidez */}
             <div className="flex flex-col md:flex-row-reverse gap-20 items-center">
                <div className="flex-1">
                   <div className="flex items-center space-x-4 mb-6 text-yy-black/20"><Globe size={24} /><div className="h-px w-12 bg-current"></div></div>
                   <h2 className="text-4xl font-black mb-8 italic uppercase">{t.section2Title}</h2>
                   <p className="text-lg leading-relaxed text-yy-muted mb-12 italic">{t.section2Desc}</p>
                   
                   <h2 className="text-4xl font-black mb-8 italic uppercase">{t.section3Title}</h2>
                   <p className="text-sm leading-relaxed text-yy-muted">{t.section3Desc}</p>
                </div>
                <div className="flex-1 shadow-2xl hand-drawn-border overflow-hidden rotate-[-2deg] group">
                   <img 
                    src="/Images/About/studio.jpg" 
                    alt="Y&Y Studio" 
                    className="h-[500px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                   />
                   <div style={{display: 'none'}} className="h-[500px] w-full"><img src="/Images/About/yinyang.jpg" alt="Y&Y Unified" className="h-full w-full object-cover" /></div>
                </div>
             </div>
          </div>

          <div className="mt-40 pt-20 border-t border-yy-black/10 flex justify-between items-center text-[9px] font-bold tracking-[0.5em] text-yy-muted uppercase">
             <span className="flex items-center"><Zap size={12} className="mr-2" /> {t.footer[0]}</span>
             <span className="flex items-center"><Layers size={12} className="mr-2" /> {t.footer[1]}</span>
             <span className="flex items-center"><Globe size={12} className="mr-2" /> {t.footer[2]}</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
