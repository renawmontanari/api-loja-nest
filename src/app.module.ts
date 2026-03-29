import { Module } from "@nestjs/common";
import { UsuarioModule } from "./usuario/usuario.module";
import { UsuarioController } from "./usuario/usuario.controller";
import { UsuarioRepository } from "./usuario/usuario.repository";
import { EmailUnicoValidator } from "./usuario/validacao/email-unico.validator";

@Module({
  imports: [UsuarioModule],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailUnicoValidator],
})
export class AppModule {}
