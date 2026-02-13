const ImagePlaceholder = ({ className = "h-96", text = "IMAGEM AQUI" }) => {
  return (
    <div className={`bg-yy-secondary/20 border-2 border-dashed border-yy-secondary/50 flex items-center justify-center overflow-hidden transition-all duration-500 hover:bg-yy-secondary/30 ${className}`}>
      <span className="text-yy-dark/30 font-display text-[10px] tracking-[0.3em] uppercase text-center px-4">{text}</span>
    </div>
  );
};

export default ImagePlaceholder;
