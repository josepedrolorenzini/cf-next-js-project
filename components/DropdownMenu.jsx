import React from 'react'

function DropdownMenu() {
  return (
    <>
      {/* Dropdown Menu */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseLeave={() => setIsDropdownOpen(isDropdownOpen)}
                className="hover:bg-gray-900 px-3 py-2 rounded-md flex items-center"
              >
                Products ▼
              </button>
    
              {/* Dropdown Content */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg py-2 transition-opacity ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } group-hover:opacity-100 group-hover:visible`}
              >
                <Link
                  href="/products/supabaseProducts"
                  className={`block px-4 py-2 hover:bg-gray-200 ${
                    pathname === "/products/supabaseProducts" ? "bg-gray-300" : ""
                  }`}
                >
                  View Products
                </Link>
                <Link
                  href="/products/supabaseProducts/add"
                  className={`block px-4 py-2 hover:bg-gray-200 ${
                    pathname === "/products/supabaseProducts/add" ? "bg-gray-300" : ""
                  }`}
                >
                  Add Products
                </Link>
                <Link
                  href="/products/supabaseProducts/edit"
                  className={`block px-4 py-2 hover:bg-gray-200 ${
                    pathname === "/products/supabaseProducts/edit" ? "bg-gray-300" : ""
                  }`}
                >
                  Edit Products
                </Link>
              </div>
            </div>
    
    
    </>
  )
}

export default DropdownMenu