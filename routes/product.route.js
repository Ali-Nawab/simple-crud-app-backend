const express = require("express")
const router = express.Router();
const Products = require("../models/product.model")
const { getProduct, getSingleProduct, updateProduct, deleteProduct, postProduct } = require("../controller/product.controller")

router.get("/", getProduct)
router.get("/:id", getSingleProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)
router.post("/", postProduct)

module.exports = router