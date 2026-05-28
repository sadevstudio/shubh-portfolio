function SectionContainer({ children, className = "" }) {
  return (
    <div
      className={`
        max-w-[1700px]
        mx-auto
        px-6
        relative
        z-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default SectionContainer;