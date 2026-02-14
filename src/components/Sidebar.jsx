const Sidebar = () => {
  return (
    <>
      {/* Esquerda */}
      <div className="fixed left-8 bottom-12 hidden lg:flex flex-col items-center space-y-8 z-40 pointer-events-none">
        <p className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.6em] text-[8px] font-bold text-yy-muted pointer-events-auto">
          YINYANG 2026
        </p>
        <div className="w-[1px] h-32 bg-yy-line"></div>
      </div>

      {/* Direita */}
      <div className="fixed right-8 top-32 hidden lg:flex flex-col items-center space-y-12 z-40 pointer-events-none">
        <div className="w-[1px] h-32 bg-yy-line"></div>
        <div className="flex flex-col space-y-8 text-[8px] font-bold tracking-widest uppercase text-yy-muted pointer-events-auto">
          <a href="#" className="hover:text-yy-primary transition-colors [writing-mode:vertical-lr]">Instagram</a>
          <a href="#" className="hover:text-yy-primary transition-colors [writing-mode:vertical-lr]">Soundcloud</a>
          <a href="#" className="hover:text-yy-primary transition-colors [writing-mode:vertical-lr]">Spotify</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
