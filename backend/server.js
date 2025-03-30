import express from "express"
import dotenv from "dotenv"
import connection from './db/connectDB.js';
import ProductRouter from "./routes/Product.routes.js";
dotenv.config()
const PORT = process.env.PORT


const app = express()
app.use(express.json())
app.use("/api",ProductRouter)






app.listen(PORT,()=>{
    console.log(`Server is listening on the ${PORT}`)
})
connection()