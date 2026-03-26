import { UsuarioRepository } from "./usuario.repository";
export declare class UsuarioController {
    private UsuarioRepository;
    constructor(UsuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: string): Promise<string>;
    listarUsuarios(): Promise<string[]>;
}
