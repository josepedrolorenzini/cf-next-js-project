import { Schema , model , models } from "mongoose";

// Define a schema for our documents

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String },
    reviews: [
        {
            user: { type: Schema.Types.ObjectId, ref: "User" },
            comment: { type: String, required: true },
            rating: { type: Number, min: 1, max: 5, required: true },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

// Export the User model

const Products =  models.Products || model("Products", ProductSchema);
export default Products;