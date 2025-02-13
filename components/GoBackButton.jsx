import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

function GoBackButton({urlLink , Pagename}) {
  return (
    // <!-- Go Back -->
    <section>
      <div className="container px-6 py-6 m-auto">
        <Link
          href={urlLink}
          className="flex items-center text-blue-500 hover:text-blue-600"
        >
          <FaArrowLeft className="mr-2 fas fa-arrow-left"></FaArrowLeft> Back to {Pagename}
        </Link>
      </div>
    </section>
  )
}

export default GoBackButton