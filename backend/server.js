import express from "express"
import dotenv from "dotenv"
import connection from './db/connectDB.js';
import Product from "./models/product.models.js";
import mongoose from "mongoose";
dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.post("/products",async(req,res)=>{
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success : false,
            mesage : "Please provide all fields"
        }) 
    }

    try {
        const newProduct = await Product(product)
        await newProduct.save()
        res.status(201).json({
            success : true,
           data : newProduct
        })
        
    } catch (error) {
        console.log("Error in create product :", error.mesage)
        res.status(500).json({
            success : false , message : "Server Error"
        })
    }
})



app.delete("/api/product/:id", async (req, res) => {
    const { id } = req.params
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : "Product Deleted"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            message : "Product Not Found"
        })
    }
})

app.put("/api/product/:id", async (req, res) => {
    const { id } = req.params
    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message : "Product not Found"
        })
    }

    try {
     const updatedProduct = await Product.findByIdAndUpdate(id, product,{new : true})
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data : updatedProduct
            
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message : "Sever Error"
        })
    }
})
app.get("/api/products", async (req, res) => {
    try {
        const data = await Product.find({})
        return res.status(200).json({
            success: true,
            data

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message : "Product cannot find"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`Server is listening on the ${PORT}`)
})
connection()