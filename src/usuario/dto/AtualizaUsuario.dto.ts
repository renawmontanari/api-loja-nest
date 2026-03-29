import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: "O nome é obrigatório!" })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: "O email deve ser válido!" })
  @EmailUnico({ message: "O email já está em uso!" })
  @IsOptional()
  email: string;

  @MinLength(6, { message: "A senha deve conter no mínimo 6 caracteres!" })
  @IsOptional()
  senha: string;
}
