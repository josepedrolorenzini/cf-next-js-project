"use client"; // Required for useState and useEffect

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import supabase from '../../../../config/supabaseConnection';
import Link from 'next/link';

function page(props) {

    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState(null);
    console.log(supabase )

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            console.log(data)
            setProduct(data[0]);
        }
        fetchProduct();
    },[ ])
    if (!product) return <p className="text-center text-gray-500">Loading...</p>;
  return (
    <>
     <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="w-full">
                    <img
                        src={`/images/products/${product.image_url}` || "/placeholder.jpg"}
                        alt={product.name}
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <p className="text-gray-500 text-lg mt-2">{product.description}</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-4">${product.price}</p>

                    {/* Buy Now Button */}
                    <Link 
                    href={"#"}
                    className="mt-6 w-full md:w-2/3 text-center bg-black text-white py-3 text-lg font-semibold rounded-xl transition hover:bg-gray-900">
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    
    </>
  )
}

 

export default page
