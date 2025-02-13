import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Codigo Facilito Project',
    description: 'A simple and clean website built with Next.js',
    author: 'Jose Lorenzini',
    keywords: ['next.js', 'mongodb', 'react', 'tailwindcss'],
  
}

function MainLayout({children}) {
  console.log(process.env)
  return (
    <AuthProvider>
    <html>
        <body className=''>
            <Navbar />
        <main>{children}</main>
         <Footer />
        </body>
    </html>
    </AuthProvider>
  )
}

export default MainLayout ;