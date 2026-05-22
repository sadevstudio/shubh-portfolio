import { useEffect, useState } from 'react'

function CustomCursor() {

  const [position,setPosition] = useState({x:0,y:0})
  const [hovered,setHovered] = useState(false)

  useEffect(()=>{

    const moveCursor = (e)=>{
      setPosition({
        x:e.clientX,
        y:e.clientY
      })
    }

    window.addEventListener('mousemove',moveCursor)

    const hoverElements = document.querySelectorAll('button,a')

    hoverElements.forEach((el)=>{
      el.addEventListener('mouseenter',()=>setHovered(true))
      el.addEventListener('mouseleave',()=>setHovered(false))
    })

    return ()=>{
      window.removeEventListener('mousemove',moveCursor)
    }

  },[])

  return (
    <>
      <div
        className="
        fixed top-0 left-0
        w-3 h-3
        rounded-full
        bg-red-500
        pointer-events-none
        z-[9999]
        mix-blend-difference
        transition-transform duration-150
        "
        style={{
          transform:`translate(${position.x}px,${position.y}px)`
        }}
      />

      <div
        className={`
        fixed top-0 left-0
        rounded-full
        border border-red-500
        pointer-events-none
        z-[9998]
        transition-all duration-300
        ${hovered ? 'w-20 h-20' : 'w-10 h-10'}
        `}
        style={{
          transform:`translate(${position.x - 20}px,${position.y - 20}px)`
        }}
      />
    </>
  )
}

export default CustomCursor