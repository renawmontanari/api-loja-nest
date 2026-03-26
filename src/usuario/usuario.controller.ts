import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller("/usuarios")
export class UsuarioController {
  private UsuarioRepository: UsuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: string) {
    await this.UsuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listarUsuarios(usuario: string) {
    return await this.UsuarioRepository.listar(usuario);
  }
}
