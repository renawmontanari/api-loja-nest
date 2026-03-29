export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: string): Promise<void>;
    listar(): Promise<string[]>;
}
