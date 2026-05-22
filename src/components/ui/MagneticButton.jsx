import { useRef } from 'react'

function MagneticButton({children}) {

  const ref = useRef(null)

  const handleMouseMove = (e)=>{

    const button = ref.current

    const rect = button.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width/2
    const y = e.clientY - rect.top - rect.height/2

    button.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2}px)
    `
  }

  const handleMouseLeave = ()=>{
    ref.current.style.transform = 'translate(0px,0px)'
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
      px-10 py-5
      bg-red-600
      hover:bg-red-700
      transition
      uppercase
      tracking-[0.25em]
      red-glow
      duration-300
      "
    >
      {children}
    </button>
  )
}

export default MagneticButton