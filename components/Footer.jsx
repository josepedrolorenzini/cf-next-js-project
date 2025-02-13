import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import Image from 'next/image'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <>
    
    <footer className="py-4 mt-auto bg-gray-200">
      <div
        className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row"
      >
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-auto h-8" />
        </div>
        <div
          className="flex flex-wrap justify-center mb-4 md:justify-start md:mb-0"
        >
          <ul className="flex space-x-4">
            <li><Link href="/properties" className='text-cyan-900'>Properties</Link></li>
            <li><Link href="/" className='text-cyan-900'>Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="mt-2 text-sm text-gray-500 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer