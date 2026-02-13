import { motion } from 'framer-motion';

const AbstractShape = ({ d, duration, delay, opacity }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="#bab5a8"
    strokeWidth="1.5"
    animate={{
      d: [
        d,
        d.replace(/(\d+)/g, (match) => parseInt(match) + (Math.random() * 80 - 40)),
        d
      ],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{ opacity }}
  />
);

const WaveBackground = () => {
  const shapes = [
    { d: "M-100,100 C200,300 500,-100 800,200 S1200,500 1500,100", duration: 20, delay: 0, opacity: 0.4 },
    { d: "M1500,800 C1200,600 900,900 600,700 S200,400 -100,800", duration: 25, delay: 2, opacity: 0.3 },
    { d: "M200,-100 C400,200 100,500 400,800 S800,1100 1000,900", duration: 30, delay: 5, opacity: 0.25 },
    { d: "M1200,1000 C1000,700 1300,400 1000,100 S600,-200 400,100", duration: 22, delay: 1, opacity: 0.3 },
    { d: "M-50,450 Q720,50 1490,450 T-50,850", duration: 18, delay: 3, opacity: 0.35 },
    { d: "M720,-50 Q1440,450 720,950 T720,-50", duration: 28, delay: 0, opacity: 0.2 },
    { d: "M0,200 S300,0 600,200 900,400 1200,200 1500,0", duration: 24, delay: 4, opacity: 0.3 },
    { d: "M1440,700 S1140,900 840,700 540,500 240,700 -60,900", duration: 20, delay: 2, opacity: 0.4 },
  ];

  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {shapes.map((s, i) => (
          <AbstractShape 
            key={i} 
            d={s.d} 
            duration={s.duration} 
            delay={s.delay} 
            opacity={s.opacity} 
          />
        ))}
      </svg>
    </div>
  );
};

export default WaveBackground;
