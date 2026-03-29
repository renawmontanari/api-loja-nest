import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";

@Controller("/usuarios")
export class UsuarioController {
  constructor(private UsuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.id = uuid();

    this.UsuarioRepository.salvar(usuarioEntity);

    return {
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: "Usuário criado com sucesso!",
    };
  }

  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.UsuarioRepository.listar();
    const usuariosExistentesLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuariosExistentesLista;
  }

  @Put("/:id")
  async atualizarUsuario(
    @Param("id") id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = this.UsuarioRepository.atualizar(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      message: "Usuário atualizado com sucesso!",
    };
  }

  @Delete("/:id")
  async deletarUsuario(@Param("id") id: string) {
    const usuarioDeletado = this.UsuarioRepository.deletar(id);

    return {
      usuario: usuarioDeletado,
      message: "Usuário deletado com sucesso!",
    };
  }
}
