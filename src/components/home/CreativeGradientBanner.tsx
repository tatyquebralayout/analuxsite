import { useEffect, useRef, useState } from "react"
import { PawPrint } from "lucide-react"

export function CreativeGradientBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Show banner with fade-in effect
    setTimeout(() => setIsVisible(true), 100)

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Optimize canvas size and performance
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const displayWidth = window.innerWidth
      const displayHeight = 400
      
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
      canvas.style.width = `${displayWidth}px`
      canvas.style.height = `${displayHeight}px`
      
      ctx.scale(dpr, dpr) // Scale all drawing operations
    }
    
    setCanvasSize()
    const resizeObserver = new ResizeObserver(setCanvasSize)
    resizeObserver.observe(canvas.parentElement || document.body)

    // Animation variables
    let animationFrameId: number
    let time = 0
    const primaryColors = ["#0D47A1", "#1565C0", "#1E88E5"]
    const secondaryColors = ["#FFA000", "#FFC107", "#FFD54F"]

    // Draw gradient animation with improved color transitions
    const animate = () => {
      time += 0.0015 // Slower animation for smoother effect
      
      // Clear canvas with base color for better performance
      ctx.fillStyle = primaryColors[0]
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Primary gradient with dynamic positioning
      const gradient1 = ctx.createLinearGradient(
        0, 
        0,
        canvas.width * (0.8 + Math.sin(time) * 0.1),
        canvas.height * (0.7 + Math.cos(time) * 0.1)
      )
      gradient1.addColorStop(0, primaryColors[0])
      gradient1.addColorStop(0.4, primaryColors[1])
      gradient1.addColorStop(1, primaryColors[2])

      // Secondary overlay gradient with subtle pulsing
      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.7 + Math.sin(time * 0.7) * 0.1),
        canvas.height * (0.3 + Math.cos(time * 0.5) * 0.1),
        canvas.width * 0.1,
        canvas.width * 0.6,
        canvas.height * 0.5,
        canvas.width * (0.7 + Math.sin(time * 0.2) * 0.1)
      )
      gradient2.addColorStop(0, `${secondaryColors[0]}15`)
      gradient2.addColorStop(0.6, `${secondaryColors[1]}10`)
      gradient2.addColorStop(1, `${secondaryColors[2]}05`)

      // Apply base gradient
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Apply secondary overlay with better blending
      ctx.globalCompositeOperation = "screen"
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "source-over"

      // Improved flowing lines with variable opacity
      for (let i = 0; i < 5; i++) {
        const opacity = 0.03 + Math.sin(time + i) * 0.02
        ctx.strokeStyle = `${secondaryColors[i % 3]}${Math.floor(opacity * 100).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 1 + i * 0.5
        
        ctx.beginPath()
        ctx.moveTo(0, canvas.height * (i / 5 + Math.sin(time + i) * 0.05))

        for (let x = 0; x < canvas.width; x += 20) {
          const y = canvas.height * (i / 5 + Math.sin(time + i + x * 0.001) * 0.05)
          ctx.lineTo(x, y)
        }

        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* Animated paw prints with improved distribution and animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => {
          // Distribute paws more evenly across the banner
          const section = Math.floor(i / 3)
          const sectionWidth = 100 / 5
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${(section * sectionWidth) + (Math.random() * sectionWidth)}%`,
                top: `${10 + Math.random() * 80}%`,
                animation: `float-paw-${i % 3} ${3 + Math.random() * 3}s infinite ${i * 0.4}s ease-in-out`,
                opacity: 0.08 + Math.random() * 0.08,
              }}
            >
              <PawPrint
                className="text-amber-400"
                style={{
                  width: 16 + Math.random() * 12,
                  height: 16 + Math.random() * 12,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          )
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-paw-0 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-25px) rotate(5deg); opacity: 0.18; }
        }
        @keyframes float-paw-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.12; }
          50% { transform: translateY(-20px) rotate(-8deg); opacity: 0.2; }
        }
        @keyframes float-paw-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.09; }
          50% { transform: translateY(-30px) rotate(10deg); opacity: 0.16; }
        }
      `}} />
    </div>
  )
}