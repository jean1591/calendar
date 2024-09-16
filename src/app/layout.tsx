import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Contrib Calendar is a productivity tool that helps you track your daily progress, visualize your tasks, and stay consistent with your goals. Easily manage contributions, goals, and streaks with our intuitive, GitHub-style calendar heatmap interface.'
const titleAndDefault = 'Contrib Calendar - Track Your Daily Progress'
const appUrl = 'https://calendar.jeanrobertou.com'

export const metadata: Metadata = {
  title: titleAndDefault,
  description: metaDescription,
  keywords: [
    'productivity app',
    'calendar app',
    'task tracking',
    'habit tracker',
    'contributions',
    'goal tracking',
    'calendar heatmap',
    'GitHub-style calendar',
    'streak tracking',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: appUrl,
    title: titleAndDefault,
    description:
      'Stay on top of your daily goals with Contrib Calendar. Track contributions, manage tasks, and visualize your progress with an intuitive calendar interface.',
    siteName: 'Contrib Calendar',
    images: [
      {
        url: '/hero-profile.png',
        width: 1200,
        height: 630,
        alt: 'Calendar Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@contribcalendar',
    title: 'Calendar - Stay Consistent with Your Goals',
    description:
      'Calendar is your tool for tracking contributions and goals with a sleek GitHub-style calendar heatmap. Stay motivated and track progress.',
    images: ['/hero-profile.png'], // Replace with your image URL
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/hero-profile.png',
  },
  themeColor: '#10B981', // Tailwind's green-500
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={classNames(
          inter.className,
          'flex h-screen items-center justify-center bg-gray-950 text-slate-50'
        )}
      >
        {children}
      </body>
    </html>
  )
}
