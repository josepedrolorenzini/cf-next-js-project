import Link from 'next/link'
import React from 'react'

function ProductDetails({element}) {
  console.log('this is product details ' + element.id)
  console.log("what the fuck")
  return (
    <>
     <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{element.category}</div>
              <h1 class="text-3xl font-bold mb-4">{element.name}</h1>
              <div className="flex items-center justify-center">
              <img src={`/images/products/${element.image}`} alt={element.name} />
              </div>
              <div
                class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p class="text-orange-700">
                  120 Tremont Street Boston, MA 02111
                </p>
              </div>

              <Link
              href={`/checkout/${element._id}`}
              value
               class="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                Add to Cart
              </Link>
              <div class="flex flex-col md:flex-row justify-around">
                <div
                  class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                >
                  <div class="text-gray-500 mr-2 font-bold">Nightly</div>
                  <div class="text-2xl font-bold">
                    <i class="fa fa-xmark text-red-700"></i>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                >
                  <div class="text-gray-500 mr-2 font-bold">Weekly</div>
                  <div class="text-2xl font-bold text-blue-500">$1,100</div>
                </div>
                <div class="flex items-center justify-center mb-4 pb-4 md:pb-0">
                  <div class="text-gray-500 mr-2 font-bold">Monthly</div>
                  <div class="text-2xl font-bold text-blue-500">$4,200</div>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-lg font-bold mb-6">Description & Details</h3>
              <div
                class="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
              >
                <p>
                  <i class="fa-solid fa-bed"></i> 3
                  <span class="hidden sm:inline">Beds</span>
                </p>
                <p>
                  <i class="fa-solid fa-bath"></i> 2
                  <span class="hidden sm:inline">Baths</span>
                </p>
                <p>
                  <i class="fa-solid fa-ruler-combined"></i>
                  1,500 <span class="hidden sm:inline">sqft</span>
                </p>
              </div>
              <p class="text-gray-500 mb-4">
                This is a beautiful apartment located near the commons
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-lg font-bold mb-6">Amenities</h3>

              <ul
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
              >
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i> Wifi
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Full
                  kitchen
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Washer &
                  Dryer
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Free
                  Parking
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Hot Tub
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>24/7
                  Security
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Wheelchair Accessible
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Elevator
                  Access
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Dishwasher
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Gym/Fitness Center
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Air
                  Conditioning
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Balcony/Patio
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Smart TV
                </li>
                <li>
                  <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Coffee
                  Maker
                </li>
              </ul>
            </div>
            {/* <!-- Map --> */}
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <div id="map"></div>
            </div>
          </main>

    
    </>
  )
}

export default ProductDetails