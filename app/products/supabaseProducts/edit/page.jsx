"use client";

import { useEffect, useState } from "react";
import supabase from "../../../../config/supabaseConnection";
import Link from "next/link";
import Image from "next/image";
import addToCart from "@/app/actions/addToCart";

function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchAll();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="px-4 py-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="relative shadow-md rounded-xl p-4">
            <Image
              src={`/images/products/${product.image_url}`}
              alt={product.name || "Product Image"}
              width={200} // Set explicit width
              height={200} // Set explicit height
              className="w-full h-auto rounded-t-xl object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">
                {product.description?.slice(0, 19)} ..
              </p>
              <p className="text-sm text-gray-500">${product.price?.toFixed(2)}</p>
              <button
              onClick={addToCart}
               className="w-full text-white bg-purple-700 rounded-md hover:bg-blue-600 mt-2">
                Add to Cart
              </button>
              <Link
                href={`/products/supabaseProducts/edit/${product.id}`}
                className="block text-center w-full px-2 py-1 text-white bg-purple-700 rounded-md hover:bg-blue-600 mt-2"
              >
                Edit Product
              </Link>
              <Link
                href={`/products/supabaseProducts/${product.id}`}
                className="block text-center w-full px-2 py-1 text-white bg-purple-700 rounded-md hover:bg-blue-600 mt-2"
              >
                View Product
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
