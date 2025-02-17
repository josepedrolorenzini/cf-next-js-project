"use client"; 

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import supabase from "../../../../../config/supabaseConnection";
import Link from "next/link"; 
import { EditSkateboard } from "@/app/actions/EditSkateboard";

function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image_url: null, 
  });

  useEffect(() => {
    async function getProduct() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error.message);
      } else {
        setFormData({
          name: data.name || "",
          description: data.description || "",
          price: data.price || "",
          quantity: data.quantity || "",
          category: data.category || "",
          image_url: data.image_url || null,
        });
      }
      setLoading(false);
    }
    getProduct();
  }, [id]);

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const updatedFormData = new FormData();
    updatedFormData.append("id", id);
    updatedFormData.append("name", formData.name);
    updatedFormData.append("description", formData.description);
    updatedFormData.append("price", formData.price);
    updatedFormData.append("quantity", formData.quantity);
    updatedFormData.append("category", formData.category);
    updatedFormData.append("image_url", formData.image_url); 
    if (imageFile) updatedFormData.append("image_file", imageFile);

    const result = await EditSkateboard(updatedFormData);

    if (result.success) {
      alert(result.message);
      router.push("/products/supabaseProducts");
    } else {
      alert(result.message);
    }
  }

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Product</h2>

      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-700">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-700">Product Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="w-full px-3 py-2 border rounded" 
          />
          {formData.image_url && (
            <img src={formData.image_url} alt="Current Image" className="mt-2 w-32 h-32 object-cover"/>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-2 rounded hover:bg-blue-900"
        >
          Update Product
        </button>
      </form>

      <div className="text-center mt-4">
        <Link href="/products/supabaseProducts/edit" className="text-grey-900 hover:underline">
          Back to Products
        </Link>
      </div>
    </section>
  );
}

export default EditProductPage;
