import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: UsuarioEntity): Promise<void>;
    listar(): Promise<UsuarioEntity[]>;
    encontrarPorEmail(email: string): Promise<boolean>;
    atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
}
