import PropertyCard from './PropertyCard';
import Link from 'next/link';
import connectDB from '@/config/database';
import Property from '@/models/Property';
// import properties from '@/properties.json';

async function HomeProperties() {
    await connectDB();
    const properties = await Property.find({}).sort({created_at: -1})
    console.log(properties)
    // sort the recent properties with sort({created_at: -1})
    const recentProperties = properties.slice(0,3) ;
  return (
    <>
     <section  className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container ' >
        <h2 className="text-3xl">Recent properties</h2>
      {recentProperties.length === 0 ? (
        <p>no properties found</p>
      ) : (
        <div  className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {recentProperties.map((property) => (
            <div>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      )}

    
      </div>

    </section>
    <section className='max-w-lg px-6 m-auto my-10'>
        <Link
          href='/properties'
          className='block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700'
        >
          View All Properties
        </Link>
      </section>
    </>
  )
}

export default HomeProperties