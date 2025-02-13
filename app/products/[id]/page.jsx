import ProductDetails from "@/components/ProductDetails";
import connectDB from "@/config/database"
import Products from "@/models/Products";

async function ProductSinglePage({ params, searchParams }) {
    connectDB() ;

    const products = await Products.findById(params.id).lean();

     console.log(products);
     console.log(params.id) ; 

  return (
    <>
    
    <div class="bg-blue-50">
      
      <ProductDetails element={products} />
      </div>
    
    </>
  )
}

export default ProductSinglePage