import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery" , true) ;

    //if the database is already connected ,do not connect again
    if(connected) {
        console.log("mongoose is already connected") ;
        return ;
    }

    //connect the database to mongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true ;
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}


export default connectDB;