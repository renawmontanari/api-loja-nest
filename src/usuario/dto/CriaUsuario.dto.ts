import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: "O nome é obrigatório!" })
  nome: string;

  @IsEmail(undefined, { message: "O email deve ser válido!" })
  @EmailUnico({ message: "O email já está em uso!" })
  email: string;

  @MinLength(6, { message: "A senha deve conter no mínimo 6 caracteres!" })
  senha: string;
}
