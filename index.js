const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const ProductRouter = require("./routes/product.route")

app.use(express.json()) // middleware to parse JSON data
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("Hello I am running on port 3000")
});

app.use("/api/products", ProductRouter)

mongoose.connect("mongodb://localhost:27017/maaliksoft")
    .then(() => {
        console.log("MongoDB is successfully connected");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection Failed", error);
    });
