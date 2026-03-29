import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async encontrarPorEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }

  private buscarUsuarioPorId(id: string) {
    const possivelUsuario = this.usuarios.find((usuario) => usuario.id === id);

    if (!possivelUsuario) {
      throw new Error("Usuário não encontrado!");
    }

    return possivelUsuario;
  }

  async atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const usuarioExistente = this.buscarUsuarioPorId(id);

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === "id") {
        return;
      }

      usuarioExistente[chave] = valor;
    });

    return usuarioExistente;
  }

  async deletar(id: string) {
    const usuario = this.buscarUsuarioPorId(id);
    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );

    return usuario;
  }
}
