import express from "express"
import { AddProduct, DeleteProduct, GetAllProduct, UpdateProduct } from "../controller/Products.controller.js"
const ProductRouter = express.Router()


ProductRouter.post("/product", AddProduct)
ProductRouter.delete("/product/:id", DeleteProduct)
ProductRouter.put("/product/:id", UpdateProduct)
ProductRouter.get("/products", GetAllProduct)

export default ProductRouter