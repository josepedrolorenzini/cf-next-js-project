import GoBackButton from "@/components/GoBackButton";
import connectDB from "@/config/database";
import Products from "@/models/Products";
import Image from "next/image";
import Link from "next/link";

async function ProductPage() {
  await connectDB();

  const products = await Products.find({}).lean() ;
  console.log(products)

  return (
    <>
      <GoBackButton urlLink={"/"} Pagename='Home' />

      <section className='px-4 py-6'>
        <div className='px-4 py-6 m-auto container-xl lg:container'>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-90/30">

          <div  className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {products.map((product) => (
            <div className="relative shadow-md rounded-xl">
                <div key={product._id} className='flex items-center px-5 py-5 space-x-2'>
                  {/* <img className='object-cover w-24 h-24' src={product.image} alt={product.name} /> */}
                    <Image
                          src={`/images/products/${product.image}`}
                          alt=''
                          width='0'
                          height='0'
                          sizes='10vw'
                          className='w-full h-auto rounded-t-xl'
                        />
                  <div>
                    <h3 className='text-lg font-bold'>{product.name}</h3>
                    <p className='text-gray-600'>{product.description.slice(0,19)} ..</p>
                    <p className='text-sm text-gray-500'>${product.price.toFixed(2)}</p>
                    <button className='w-full text-white bg-purple-700 rounded-md hover:bg-blue-600'>Add to Cart</button>
                    <Link
                    href={`/products/${product._id}`}
                     className='w-full px-1 px-2 text-white bg-purple-700 rounded-md hover:bg-blue-600'>View product</Link>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
        
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductPage