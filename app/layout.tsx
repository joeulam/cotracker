import { Comfortaa, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata = {
  title: 'CoTrackers',
  description: 'Finance Tracker built with Next.js, React, and TailwindCSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#E7E7E7]`}>{children}</body>
    </html>
  )
}
