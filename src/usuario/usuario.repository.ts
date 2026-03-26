export class UsuarioRepository {
  private usuarios: string[] = [];

  async salvar(usuario: string) {
    await this.usuarios.push(usuario);
  }

  async listar(usuario: string) {
    return await this.usuarios;
  }
}
