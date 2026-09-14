import express, {Request, Response} from "express";
import { UsuarioService } from "../services/usuarioService";

interface Usuario {
    id: number;
    nome: string;
}

export class UsuarioController {
    private usuarioService : UsuarioService;

    constructor() {
        this.usuarioService = new UsuarioService();
    }

    //toda requisição deveve voltar uma responsa, indicado em ": Response"
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await this.usuarioService.getAllUsuarios();
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json({message: "Erro interno" });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const usuario = await this.usuarioService.getUsuarioById(id);
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(404).json({message: (error as Error).message});
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { nome } = req.body;
            const novousuario = await this.usuarioService.createUsuario({nome});
            return res.status(201).json(novousuario);
        } catch (error) {
            return res.status(400).json({message: (error as Error).message});
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const { nome } = req.body
            const atualiza = await this.usuarioService.updateUsuario(id, {nome});
            return res.status(200).json(atualiza);
        } catch (error) {
            return res.status(400).json({message: (error as Error).message});
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const exclui = await this.usuarioService.deleteUsuario(id);
            return res.status(204).json(exclui);
        } catch (error) {
            return res.status(400).json({message: (error as Error).message});
        }
    }
}