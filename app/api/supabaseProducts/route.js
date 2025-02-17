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


//post

import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public/images/products", filename);

    await writeFile(filePath, buffer);

    return NextResponse.json({ imageUrl: `/images/products/${filename}` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
