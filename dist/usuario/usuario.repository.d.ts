import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: UsuarioEntity): Promise<void>;
    listar(): Promise<UsuarioEntity[]>;
    encontrarPorEmail(email: string): Promise<boolean>;
    private buscarUsuarioPorId;
    atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    deletar(id: string): Promise<UsuarioEntity>;
}
