import { useEffect, useRef } from 'react'

const Background3D = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Simple 3D CSS transform effect – no Three.js needed
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const x = (e.clientX / window.innerWidth) * 20 - 10
      const y = (e.clientY / window.innerHeight) * 20 - 10
      containerRef.current.style.transform = `rotateY(${x * 0.05}deg) rotateX(${y * -0.03}deg)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-green-sage/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-green-deep/5 blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cream-dark/20 blur-[100px] animate-spin-slow" />
    </div>
  )
}

export default Background3D