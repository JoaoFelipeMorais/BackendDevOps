// importa o express ao arquivo
import express, {Request, Response} from "express";

//instancia o express em app e define em qual porta vai rodar a API
const app = express();
const PORT = 3000;

//define que a linguagem da API, no caso JSON
app .use(express.json());

// executa um get para o path(caminho) e arry function
app.get("/api/usuario", (req: Request, res: Response)  => {
    res.json({"materia": "devops backend"});
});

app.listen(PORT, () => {
    console.log("Servidor rodando, parmera não tem mundial");
});