"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
class UsuarioRepository {
    usuarios = [];
    async salvar(usuario) {
        await this.usuarios.push(usuario);
    }
    async listar(usuario) {
        return await this.usuarios;
    }
}
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map