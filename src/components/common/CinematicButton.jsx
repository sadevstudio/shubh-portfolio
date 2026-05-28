function CinematicButton({
  children,
  className = "",
}) {
  return (
    <button
      className={`
        px-8
        py-4
        uppercase
        tracking-[0.2em]
        bg-red-600
        hover:bg-red-500
        transition-all
        duration-300
        text-white
        red-glow-soft
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default CinematicButton;