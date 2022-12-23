import express from "express";
import productsRouter from "./routes/productRoutes.js";
import cartsRouter from "./routes/cartRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/",(req,res)=>{
    res.send(`Principal`)
})

app.listen(8080, () => {
    console.log(`Escuchando puerto 8080...`)
});