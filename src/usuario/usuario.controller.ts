import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller("/usuarios")
export class UsuarioController {
  constructor(private UsuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: string) {
    this.UsuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listarUsuarios() {
    return this.UsuarioRepository.listar();
  }
}
