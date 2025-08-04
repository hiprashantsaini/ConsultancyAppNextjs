'use client'

import { motion, useAnimation } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const videos = [
  '/testimonial2.mp4',
  '/testimonial1.mp4',
  '/testimonial1.mp4',
  '/testimonial2.mp4',
  '/testimonial2.mp4',
]

export default function ProfessionalTestimonials() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (outer && inner) {
      setScrollWidth(inner.scrollWidth - outer.offsetWidth)
    }
  }, [])

  useEffect(() => {
    let animationLoop: number | null = null;

    const animateScroll = async () => {
      if (isHovered || scrollWidth <= 0) return
      
      try {
        await controls.start({
          x: -scrollWidth,
          // transition: { duration: scrollWidth / 50, ease: 'linear' },
          transition: { duration: 5, ease: 'linear' },
        })
        
        if (!isHovered) {
          await controls.set({ x: 0 })
          // Continue the loop
          animationLoop = requestAnimationFrame(animateScroll)
        }
      } catch (error) {
        // Animation was interrupted, which is fine
        console.log(error);
      }
    }

    if (scrollWidth > 0 && !isHovered) {
      animateScroll()
    }

    return () => {
      if (animationLoop) {
        cancelAnimationFrame(animationLoop)
      }
    }
  }, [scrollWidth, controls, isHovered])

  // Handle hover state changes
  const handleMouseEnter = () => {
    setIsHovered(true)
    controls.stop() // Stop any ongoing animation
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedVideo && e.key === 'Escape') {
        setSelectedVideo(null)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedVideo])

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={outerRef}
          className="overflow-hidden px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={innerRef}
            className="flex gap-6"
            animate={controls}
          >
            {videos.map((videoSrc, index) => (
              <motion.div
                key={index}
                className="relative group min-w-[280px] sm:min-w-[320px]"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <video
                      src={videoSrc}
                      className="w-full h-48 sm:h-56 rounded-t-xl object-cover cursor-pointer"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      onClick={() => setSelectedVideo(videoSrc)}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Client Success Story
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Click to watch full testimonial
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Fullscreen Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Video Player */}
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
              style={{ maxHeight: '80vh' }}
            />
            
            {/* Keyboard Hint */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Esc</kbd> to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}