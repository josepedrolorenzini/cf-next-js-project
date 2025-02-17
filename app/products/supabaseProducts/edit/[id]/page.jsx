"use client"; // Required for useState and useEffect

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import supabase from "../../../../../config/supabaseConnection";
import Link from "next/link"; 
import { useRouter } from "next/navigation";


function EditProductPage() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
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
        setProduct(data);
        setFormData({
          name: data.name || "",
          description: data.description || "",
          price: data.price || "",
          quantity: data.quantity || "",
          category: data.category || "",
        });
      }
      setLoading(false);
    }
    getProduct();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    const { error } = await supabase
      .from("products")
      .update(formData)
      .eq("id", id);

    if (error) {
      console.error("Update failed:", error.message);
      alert("Failed to update product");
    } else {
      alert("Product updated successfully!");
        router.push("/products/supabaseProducts")
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
        

        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-2 rounded hover:bg-blue-900"
        >
          Update Product
        </button>
      </form>

      <div className="text-center mt-4">
        <Link href="/products" className="text-grey-900 hover:underline">
          Back to Products
        </Link>
      </div>
    </section>
  );
}

export default EditProductPage;
