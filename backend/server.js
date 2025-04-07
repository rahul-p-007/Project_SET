import express from "express";
import dotenv from "dotenv";
import path from "path";
import connection from "./db/connectDB.js";
import ProductRouter from "./routes/Product.routes.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use("/api", ProductRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening on the ${PORT}`);
});
connection();
