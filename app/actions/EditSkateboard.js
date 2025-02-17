"use server";

import { writeFile } from "fs/promises";
import path from "path";
import supabase from "../../config/supabaseConnection";

export async function EditSkateboard(formData) {
  try {
    const file = formData.get("image_file");
    let imageUrl = formData.get("image_url"); // Keep the existing image URL if no new file

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/images/products", filename);

      // Save the image to public folder
      await writeFile(filePath, buffer);

      // Update image URL
      imageUrl = `${filename}`;
    }

    // Update Supabase
    const { error } = await supabase
      .from("products")
      .update({
        name: formData.get("name"),
        description: formData.get("description"),
        price: formData.get("price"),
        quantity: formData.get("quantity"),
        category: formData.get("category"),
        image_url: imageUrl,
      })
      .eq("id", formData.get("id"));

    if (error) {
      console.error("Update failed:", error.message);
      return { success: false, message: "Failed to update product" };
    }

    return { success: true, message: "Product updated successfully!" };
  } catch (error) {
    console.error("Error:", error.message);
    return { success: false, message: "Server error occurred" };
  }
}
