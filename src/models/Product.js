import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  label: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
