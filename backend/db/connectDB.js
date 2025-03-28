import mongoose from "mongoose";

 const connection = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{

            dbName : "Product_DB"
        })
        console.log(`Database is connected 😇🥳`)
    } catch (error) {
        console.log("Error while connectiong the database",error.message)
    }
}
export default connection