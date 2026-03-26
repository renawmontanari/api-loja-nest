import { UsuarioRepository } from "./usuario.repository";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("/usuarios")
export class UsuarioController {
  private UsuarioRepository: UsuarioRepository = new UsuarioRepository();

  @Post()
  criaUsuario(@Body() dadosDoUsuario: string) {
    this.UsuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
}
