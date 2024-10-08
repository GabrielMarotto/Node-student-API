import express from "express";
import AlunoRoutes from "./router/AlunoRoutes.js";

const server = express();
const port = 5000;

server.use(express.json());
server.use(AlunoRoutes);

server.listen (port, ()=> {
    console.log("Server listening on port 5000");
});
