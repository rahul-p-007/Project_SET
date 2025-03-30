import mongoose, { Schema } from "mongoose";
// const Schema = mongoose.Schema
// const ProductSchema = new Schema(
//     {
        
//     }
// )
const prouctSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    price :{
        type: Number,
        required : true
    },
    image :
    {
        type : String,
        required : true
    }

},{
    timestamps : true // it have createdAt,updatedAt
})

const Product = mongoose.model("Product",prouctSchema)
export default Product

