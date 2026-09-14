import {UsuarioRepository} from "../repositories/usuarioRepository";
import {Usuario, UsuarioAttributes} from "../models/Usuario";

export class UsuarioService {
    private usuarioRepository : UsuarioRepository;

    constructor () {
        this.usuarioRepository = new UsuarioRepository();
    }

    async getAllUsuarios() {
        return await this.usuarioRepository.findAll();
    }

    async getUsuarioById(id: number) {
        const usuario = await this.usuarioRepository.findById(id);
        if (!usuario) {
            throw new Error("Usuário não encontrado");
        }

        return usuario;
    }

    async createUsuario(usuarioData: Omit<UsuarioAttributes, "id">) {
        return await this.usuarioRepository.create(usuarioData);
    }

    async deleteUsuario(id: number) {
        const result = await this.usuarioRepository.delete(id);
        if (!result) {
            throw  new Error("Não foi possivel excluir o usuario com id:" + id);
        }
        return result;
    }

    async updateUsuario(id: number, usuarioData: Partial<UsuarioAttributes>): Promise<Usuario | null> {
        const currentUser = await this.usuarioRepository.update(id, usuarioData);
        if (currentUser == null) {
            throw new Error("Não foi possivel atualizar o usuario id:" + id);
        }
        return currentUser

    }
}