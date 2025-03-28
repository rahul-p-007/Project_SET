import express from "express"
import dotenv from "dotenv"
import connection from './db/connectDB.js';
dotenv.config()
const app = express()

const PORT = process.env.PORT







app.listen(PORT,()=>{
    console.log(`Server is listening on the ${PORT}`)
})
connection()