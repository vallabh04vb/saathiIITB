import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/nav'
const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saathi IITB',
  description: 'Offcial Website of Saathi IIT Bombay',
  icons:{
    icon:['/fav/favicon.ico'],
    apple:['/fav/apple-touch-icon.png'],
    shortcut:['/fav/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
        <Navbar/>
        <div id="drawer"></div>
                    {children}
  
        </ThemeProvider>
      </body>
    </html>
  )
}
