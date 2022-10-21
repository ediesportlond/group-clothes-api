import express from "express";
import cors from "cors";
import { updateClothes,findOneArticleOfClothing } from "./src/clothes.js";

const PORT = 3030;
const app = express();
app.use(cors());
app.use(express.json());

app.patch("/clothes/update/:id", updateClothes);
app.get("/clothes/search/:search", findOneArticleOfClothing);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));