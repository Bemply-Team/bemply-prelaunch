import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Cousine, Josefin_Sans, Oswald, Inter, Cuprum, Lato } from "next/font/google"
import Script from "next/script"
import SplashWrapper from "@/components/splash-wrapper"
import "./globals.css"
// Import the WaitlistProvider
import { WaitlistProvider } from "@/context/waitlist-context"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cousine",
})

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cuprum = Cuprum({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cuprum",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Bemply - Coming Soon",
  description: "We Are Getting Everything Ready For You",
    generator: 'v0.dev'
}

// Update the RootLayout function to wrap children with WaitlistProvider
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.google.com/recaptcha/api.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${montserrat.variable} ${cousine.variable} ${josefinSans.variable} ${oswald.variable} ${inter.variable} ${cuprum.variable} ${lato.variable} antialiased`}
      >
        <WaitlistProvider>
          <SplashWrapper>{children}</SplashWrapper>
        </WaitlistProvider>
      </body>
    </html>
  )
}
