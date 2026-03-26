"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
class UsuarioRepository {
    usuarios = [];
    salvar(usuario) {
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }
}
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map