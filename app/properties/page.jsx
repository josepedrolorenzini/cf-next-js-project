import PropertyCard from '@/components/PropertyCard'
import connectDB from '@/config/database';
import Property from '@/models/Property';
//import properties from '@/properties.json'

async function Properties() {
  //console.log(properties) ;
  
  // Connect to MongoDB database
  await connectDB() ;
  
  const properties = await Property.find({}).lean() ;
  console.log(properties) ;
  
  return (
    <section  className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container' >
      {properties.length === 0 ? (
        <p>no properties found</p>
      ) : (
        <div  className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {properties.map((property) => (
            <div>
              <PropertyCard property={property} key={property._id}/>
            </div>
          ))}
        </div>
      )}

    
      </div>

    </section>
  )
}

export default Properties