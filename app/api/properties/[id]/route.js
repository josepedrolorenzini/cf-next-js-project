import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request , { params }) => {

    try {

        // let db = connectDB();
        // console.log(db) ;

        connectDB();
        
        const property = await Property.findById(params.id);
        
        /*
        return new Response(JSON.stringify({
            message: "Hello, World!",
            data: properties,
        } ), {status:200}) ; 
         */

        // return new Response(properties, {status:200})
        if(!property) return new Response("Property not found" , {status:404}) ;
        return new Response(property, {status:200}) ;
        
    } catch (error) {
        return new Response("Something went wrong", {status:500});  
    }
   
 
}
