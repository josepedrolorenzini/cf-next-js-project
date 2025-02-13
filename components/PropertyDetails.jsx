import React from 'react'
import { FaTimes ,FaBed , FaBath , FaRulerCombined,FaCheck ,FamapMarker, FaMapMarker} from 'react-icons/fa'

function PropertyDetails({element}) {
  return (
    <>
     <main>
            <div
              className="p-6 text-center bg-white rounded-lg shadow-md md:text-left"
            >
              <div className="mb-4 text-gray-500">{element.type}</div>
              <h1 className="mb-4 text-3xl font-bold">{element.name}</h1>
              <div
                className="flex justify-center mb-4 text-gray-500 align-middle md:justify-start"
              >
               <FaMapMarker className='mt-1 mr-1 text-orange-700'/>
                <p className="text-orange-700">
              {element.location.street}
              {element.location.city}{" "}
              {element.location.zipcode}
                </p>
              </div>

              <h3 className="p-2 my-6 text-lg font-bold text-white bg-gray-800">
                Rates & Options
              </h3>
              <div className="flex flex-col justify-around md:flex-row">
                <div
                  className="flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0"
                >
                  <div className="mr-2 font-bold text-gray-500">Nightly</div>
                  <div className="text-2xl font-bold">
                   {element.rates.nightly ? (
                    `${element.rates.nightly.toLocaleString()}`
                   ) : 
                   <FaTimes className='text-red-700' />}
                  </div>
                </div>
                <div
                  className="flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0"
                >
                  <div className="mr-2 font-bold text-gray-500">Weekly</div>
                  <div className="text-2xl font-bold text-blue-500">${element.rates.weekly ? (
                    `${element.rates.weekly.toLocaleString()}`
                   ) : 
                   <FaTimes className='text-red-700' />}</div>
                </div>
                <div className="flex items-center justify-center pb-4 mb-4 md:pb-0">
                  <div className="mr-2 font-bold text-gray-500">Monthly</div>
                  <div className="text-2xl font-bold text-blue-500">${element.rates.monthly ? (
                    `${element.rates.monthly.toLocaleString()}`
                   ) : 
                   <FaTimes className='text-red-700' />}</div>
                </div>
              </div>
            </div>

            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-lg font-bold">Description & Details</h3>
              <div
                className="flex justify-center gap-4 mb-4 text-xl text-blue-500 space-x-9"
              >
                <p>
                 <FaBed className='inline-block mr-2' /> {element.beds}
                  <span className="hidden sm:inline">Beds</span>
                </p>
                <p>
                  <FaBath className='inline-block'/> {element.baths}
                  <span className="hidden sm:inline">Baths</span>
                </p>
                <p>
                <FaRulerCombined className='inline-block' />
                  {element.square_feet} <span className="hidden sm:inline">sqft</span>
                </p>
              </div>
              <p className="mb-4 text-gray-500">
               {element.description}
              </p>
            </div>

            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-lg font-bold">Amenities</h3>

              <ul
                className="grid grid-cols-1 list-none md:grid-cols-2 lg:grid-cols-3"
              >
                {element.amenities.map((amenity,index) =>{
                    return (
                        <li key={index}>
                        <i className="mt-3 mr-2 text-green-600 fas fa-check"></i> {amenity}
                      </li>
                    )
  
                })}
              </ul>
            </div>
            {/* <!-- Map --> */}
            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <div id="map"></div>
            </div>
          </main>

    
    </>
  )
}

export default PropertyDetails