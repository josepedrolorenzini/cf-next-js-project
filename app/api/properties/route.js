import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async () => {

    try {

        // let db = connectDB();
        // console.log(db) ;

        connectDB();
        
        const properties = await Property.find({});
        
        /*
        return new Response(JSON.stringify({
            message: "Hello, World!",
            data: properties,
        } ), {status:200}) ; 
         */
        return new Response(properties, {status:200})
        
    } catch (error) {
        return new Response("Something went wrong", {status:500});  
    }
   
 
}
