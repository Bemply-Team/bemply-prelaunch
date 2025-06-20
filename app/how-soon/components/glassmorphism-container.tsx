import type { ReactNode } from "react"

interface GlassmorphismContainerProps {
  children: ReactNode
}

export default function GlassmorphismContainer({ children }: GlassmorphismContainerProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl p-8 sm:p-10 md:p-12 lg:p-10 xl:p-12 pb-6 sm:pb-8 md:pb-10 lg:pb-6 xl:pb-8 min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[480px] xl:min-h-[520px] relative">
      {children}
    </div>
  )
}
