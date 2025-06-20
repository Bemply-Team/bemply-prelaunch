"use client"

import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [animationData, setAnimationData] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const lottieRef = useRef(null)

  useEffect(() => {
    // Load the animation data
    fetch("/animations/bemply-splash.json")
      .then((response) => response.json())
      .then((data) => {
        // Remove audio elements from the animation data to prevent errors
        if (data.assets) {
          // Filter out any audio assets
          data.assets = data.assets.filter((asset: any) => asset.id !== "audio_0" && !asset.p?.startsWith("data:audio"))
        }

        // Remove any audio layers
        if (data.layers) {
          data.layers = data.layers.filter((layer: any) => layer.ty !== 6)
        }

        setAnimationData(data)
      })
      .catch((error) => {
        console.error("Failed to load animation:", error)
        // If animation fails to load, proceed to main content
        setTimeout(onComplete, 1000)
      })
  }, [onComplete])

  const handleAnimationComplete = () => {
    // Start fade out
    setIsVisible(false)
    // Complete after fade transition
    setTimeout(onComplete, 500)
  }

  // Set up a safety timeout to ensure we don't get stuck on the splash screen
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      handleAnimationComplete()
    }, 6000) // 6 seconds max for animation

    return () => clearTimeout(safetyTimeout)
  }, [])

  if (!animationData) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full max-w-md max-h-screen flex items-center justify-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={true}
          onComplete={handleAnimationComplete}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "400px",
            maxHeight: "600px",
          }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
          }}
        />
      </div>
    </div>
  )
}
