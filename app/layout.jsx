import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Codigo Facilito Project',
    description: 'A simple and clean website built with Next.js',
    author: 'Jose Lorenzini',
    keywords: ['next.js', 'mongodb', 'react', 'tailwindcss'],
  
}

function MainLayout({children}) {
  return (
    <html>
        <body className=' bg-black'>
        <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout ;