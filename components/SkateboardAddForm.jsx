"use client";
import { useState } from "react";
import addSkateboads from "@/app/actions/addSkateboards";
import { useRouter } from "next/navigation";
 

const SkateboardAddForm = () => {

    const [status, setStatus] = useState('');
    const [imageFile, setImageFile] = useState('');
    const router = useRouter();

    function handleFileChange(event) {
        setImageFile(event.target.files[0]); // Store selected file
        console.log(event.target.files[0])
        if(imageFile != ""){
            console.log(imageFile)
        }
      }

      async function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
    
        const formData = new FormData(event.target); // Create a FormData object
        if (event.target.files[0]) {
          formData.append("image_file", event.target.files[0]); // Append the image file to FormData
        }
    
        // Call the addSkateboards function to handle the data submission
        const result = await addSkateboads(formData);
        setStatus(result.message); // Set the status message based on the result
      }


  return (
    <form action={addSkateboads}>
      <h2 className='mb-6 text-3xl font-semibold text-center'>Add Product</h2>
      
      <div className='mb-4'>
        <label htmlFor='name' className='block mb-2 font-bold text-gray-700'>
          Product Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='w-full px-3 py-2 border rounded'
          placeholder='Enter product name'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='description' className='block mb-2 font-bold text-gray-700'>
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='w-full px-3 py-2 border rounded'
          rows='4'
          placeholder='Optional product description'
        ></textarea>
      </div>

      <div className='mb-4'>
        <label htmlFor='price' className='block mb-2 font-bold text-gray-700'>
          Price ($)
        </label>
        <input
          type='number'
          step='0.01'
          id='price'
          name='price'
          className='w-full px-3 py-2 border rounded'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='quantity' className='block mb-2 font-bold text-gray-700'>
          Quantity
        </label>
        <input
          type='number'
          id='quantity'
          name='quantity'
          className='w-full px-3 py-2 border rounded'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='category' className='block mb-2 font-bold text-gray-700'>
          Category
        </label>
        <input
          type='text'
          id='category'
          name='category'
          className='w-full px-3 py-2 border rounded'
          placeholder='Enter product category'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='image_url' className='block mb-2 font-bold text-gray-700'>
          Image URL (optional)
        </label>
        <input 
        type="file" 
        id="image_file" 
        name="image_file" 
        accept="image/*" 
        onChange={handleFileChange} className="w-full px-3 py-2 border rounded"  />
      </div>

      <div>
        <button
          className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Add Product
        </button>
      </div>

      {status && (
        <div className='mt-4 text-center'>
          <p className={status.includes("success") ? 'text-green-500' : 'text-red-500'}>
            {status}
          </p>
        </div>
      )}
    </form>
  );
};

export default SkateboardAddForm;
