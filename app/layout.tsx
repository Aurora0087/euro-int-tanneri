import { Playfair_Display, Noto_Sans, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata = {
  title: "Euro International | Fine Leather Goods",
  description:
    "Premium leather manufacturer based in Kolkata, India — combining European quality standards with sustainable, responsible tanning practices.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", playfair.variable, notoSans.variable, geistMono.variable)}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
