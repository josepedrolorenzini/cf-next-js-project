import supabaseConn from "@/config/supabaseConnection";

export const GET = async () => {

    try {
            
         // Fetch data from Supabase
        const { data ,  error } = await supabaseConn.from("products").select("*");
        if(error) {
            console.error("Error fetching data: ", error);
            throw error;
        }
        console.log(JSON.stringify({data})) ;
        
        // Return data as JSON response
        return new Response(JSON.stringify({data}), {
            status:200 ,
            headers: { "Content-Type": "application/json" }
        })
        
    } catch (error) {
        console.error("Server error:", err);
        return new Response({
            message:"Something went wrong",
        }, {status:500});  
    }
   
 
}