import express, {Request, Response} from "express";

interface Usuario {
    id: number;
    nome: string;
}

export class UsuarioController {
    //toda requisição deveve voltar uma responsa, indicado em ": Response"
    getAll(req: Request, res: Response): Response {
        return res.json();
    }

    getById(req: Request, res: Response): Response {
        return res.json();
    }

    create(req: Request, res: Response): Response {
        return res.status(201).json();
    }

    update(req: Request, res: Response): Response {
        return res.status(201).json();
    }

    delete(req: Request, res: Response): Response {
        return res.status(201).json();
    }
}