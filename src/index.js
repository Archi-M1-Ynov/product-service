import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./controllers/productController.js";


dotenv.config();

const app = express();
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("Erreur de connexion MongoDB :", err));

// Routes
app.use("/products", productRoutes);

// Lancement du serveur
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`🚀 Product-service en écoute sur http://localhost:${PORT}`);
});
