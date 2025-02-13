import Image from "next/image"

function PropertyHeaderImage({image}) {
  return (
    <>
    
    {/* <!-- Property Header Image --> */}
    <section>
      <div className="m-auto container-xl">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            height={0}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
    
    </>
  )
}

export default PropertyHeaderImage