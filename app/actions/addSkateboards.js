"use server";
import supabase from "../../config/supabaseConnection.js";
import path from "path";
import fs from "fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function addSkateboads(formData) {
  try {
    //extract form image data 
   let  imageUrl =  formData.get("image_url") 
   const imageFile = formData.get("image_file"); // Assuming the file input is named 'image_file'

   if(imageFile) {
    // Save the image to a public directory and update imageUrl with the public URL
    const uploadDir = path.join(process.cwd(), "public", "images", "products");
    const fileName = `${Date.now()}_${imageFile.name}`; // Unique file name
    const uploadPath = path.join(uploadDir, fileName);
    const fileBuffer = Buffer.from(await imageFile.arrayBuffer());

    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    fs.writeFileSync(uploadPath, fileBuffer);
    imageUrl = `${fileName}`; // Public image URL
   }
    // Extract form data
    const skateboardData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")), // Ensure price is a number
      quantity: Number(formData.get("quantity")), // Ensure quantity is a number
      category: formData.get("category"),
      image_url : imageUrl || null,
     // image_url: formData.get("image_url") || null, // Optional field
    };

    console.log("Received Form Data:", skateboardData);

    // Insert data into the "products" table
    const { data, error } = await supabase.from("products").insert([skateboardData]);

    if (error) {
      console.error("Supabase Insert Error:", error.message);
      throw new Error("Database Insertion Error: " + error.message);
    }

    alert("Inserted Skateboard:", data);
    revalidatePath('/', 'layout');
  
    router(`/products/supabaseProducts/`);
    return { success: true, message: "Product added successfully!" };

  } catch (error) {
    console.error("Error in addSkateboards:", error.message);
    return { success: false, message: error.message };
  }
}

export default addSkateboads;
