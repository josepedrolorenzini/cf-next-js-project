import GoBackButton from "@/components/GoBackButton";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";

async function PropertyPage({ params, searchParams }) {
  await connectDB();

  const property = await Property.findById(params.id).lean();
  console.log(property)
  return (
    <>
      {/* PropertyPage {params.id} {searchParams.name} */}
      <PropertyHeaderImage image={property.images[0]} />
      <GoBackButton urlLink={"/properties"} Pagename="Properties" />

      <section class="bg-blue-50">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">

           <PropertyDetails element={property}/>
          </div>
        </div>
      </section>

    </>
  )
}

export default PropertyPage