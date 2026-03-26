export declare class UsuarioController {
    private UsuarioRepository;
    criaUsuario(dadosDoUsuario: string): Promise<string>;
    listarUsuarios(usuario: string): Promise<string[]>;
}
