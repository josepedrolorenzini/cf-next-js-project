"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function supabaseProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {

     let fetchDataProducts = async ()=>{
        try {
            // fetch data from Supabase
            const response = await  fetch("/api/supabaseProducts");
            const result = await response.json();

            // check if the data fetch is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

             // update the state with the fetched data
            setProducts(result.data.sort((a,b)=> b.id - a.id));

            
        } catch (error) {
            setError("Failed to fetch products");
            throw new Error(`HTTP error! status: ${error.status}`)
        }
     }
     fetchDataProducts();
    },[]) ; 


  return (
    <>
    
    supabaseProducts
    { error && <p>{error}</p>}
   { console.log(products)}
   <div  className='grid grid-cols-1 gap-6 md:grid-cols-3'>
   {products.map((product) => {
       return (
        <div 
        key={product.id}
        className="relative shadow-md rounded-xl">
                <div 
               
                 className='flex items-center px-5 py-5 space-x-2' 
                 >
                  {/* <img className='object-cover w-24 h-24' src={product.image} alt={product.name} /> */}
                     <Image
                          src={`/images/products/${product.image_url}`}
                          alt=''
                          width='0'
                          height='0'
                          sizes='10vw'
                          className='w-48 auto w- rounded-t-xl'
                        /> 
                  <div>
                    <h3 className='text-lg font-bold'>{product.name}</h3>
                    <p className='text-gray-600'>{product.description.slice(0,19)} ..</p>
                    <p className='text-sm text-gray-500'>${product.price.toFixed(2)}</p>
                    <button className='w-full text-white bg-purple-700 rounded-md hover:bg-blue-600'>Add to Cart</button>
                    <Link
                    href={`/products/supabaseProducts/${product.id}`}
                     className='w-full px-1 px-2 text-white bg-purple-700 rounded-md hover:bg-blue-600'>View product</Link>
                  </div>
                </div>
              </div>
       )
  
   }
   )}
  </div>
    </>
  )
}

export default supabaseProducts