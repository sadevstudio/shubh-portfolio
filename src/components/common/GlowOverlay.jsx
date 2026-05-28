function GlowOverlay() {
  return (
    <div
      className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[700px]
      h-[700px]
      bg-red-600/10
      blur-[100px]
      rounded-full
      pointer-events-none
      "
    />
  );
}

export default GlowOverlay;