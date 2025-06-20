"use client"

import type React from "react"

import { useState, useEffect } from "react"
import SplashScreen from "./splash-screen"

interface SplashWrapperProps {
  children: React.ReactNode
}

export default function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [hasShownSplash, setHasShownSplash] = useState(false)

  useEffect(() => {
    // Check if splash has been shown in this session
    const splashShown = sessionStorage.getItem("bemply-splash-shown")

    if (splashShown) {
      setShowSplash(false)
      setHasShownSplash(true)
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setHasShownSplash(true)
    // Mark splash as shown for this session
    sessionStorage.setItem("bemply-splash-shown", "true")
  }

  return (
    <>
      {showSplash && !hasShownSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`transition-opacity duration-500 ${showSplash ? "opacity-0" : "opacity-100"}`}>{children}</div>
    </>
  )
}
