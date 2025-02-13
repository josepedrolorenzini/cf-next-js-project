import { Schema , model , models } from "mongoose";

// Define the schema for the "User" collection

const PropertySchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name:{
        type: String,
        required: true
    },
    descriptions:{
        type: String,
    },
    location:{
        street:String,
        city:String,
        state:String,
        zipcode:String
    },
    beds:{
        type: Number,
        required: true
    },
    baths:{
        type: Number,
        required: true
    },
    square_feet:{
        type: Number,
        required: true
    },
    amenities:[
        {
            type: String,
        }
    ],
    rates:{
        nightly:{
            type: Number,
        },
        weekly:{
            type: Number,
        },
        monthly:{
            type: Number,
        }
    },
    seller_info:{
        name:String,
        email:String,
        phone:String,
    },
    images:[
        {type:String}
    ],
    is_featured:{
        type: Boolean,
        default: false
    }
    
} , {
    timestamps: true,
});


// Export the User model

const Property =  models.Property || model("Property", PropertySchema);
export default Property;