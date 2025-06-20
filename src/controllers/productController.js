import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET /products → lister tous les produits
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /products → créer un nouveau produit
router.post("/", async (req, res) => {
  const { label, price, quantity } = req.body;
  try {
    const newProduct = new Product({ label, price, quantity });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Erreur ajout produit" });
  }
});

// POST /products/search → recherche par nom
router.post("/search", async (req, res) => {
  const { query } = req.body;
  try {
    const results = await Product.find({
      label: { $regex: query, $options: "i" },
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Erreur recherche" });
  }
});

export default router;
