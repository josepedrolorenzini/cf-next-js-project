
import ProductDetails from "@/components/ProductDetails";
import connectDB from "@/config/database"
import Products from "@/models/Products";

 

async function page({ params, searchParams }) {
    console.log(params.id)
    const products = await Products.findById(params.id).lean();

    console.log(products)
   await connectDB();

  return (
    <div>
        <ProductDetails element={products} />
    </div>
  )
}

export default page