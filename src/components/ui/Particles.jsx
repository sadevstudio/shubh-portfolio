function Particles() {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {[...Array(30)].map((_,i)=>(
        <span
          key={i}
          className="
          absolute
          w-1 h-1
          bg-red-500/30
          rounded-full
          animate-pulse
          "
          style={{
            top:`${Math.random()*100}%`,
            left:`${Math.random()*100}%`,
          }}
        />
      ))}

    </div>
  )
}

export default Particles