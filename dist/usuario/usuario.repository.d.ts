export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: string): Promise<void>;
    listar(usuario: string): Promise<string[]>;
}
