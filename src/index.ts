// importa o express ao arquivo
import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes";

//instancia o express em app e define em qual porta vai rodar a API
const app = express();
const PORT = 3000;

//define que a linguagem da API, no caso JSON
app.use(express.json());
app.use("/api/usuarios", usuarioRoutes);


app.listen(PORT, () => {
    console.log("Servidor rodando, parmera não tem mundial");
});