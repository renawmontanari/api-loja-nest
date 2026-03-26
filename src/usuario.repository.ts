export class UsuarioRepository {
  private usuarios: string[] = [];

  salvar(usuario: string) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }
}
