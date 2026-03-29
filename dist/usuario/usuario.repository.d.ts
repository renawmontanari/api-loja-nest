import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: CriaUsuarioDTO): Promise<void>;
    listar(): Promise<CriaUsuarioDTO[]>;
    encontrarPorEmail(email: string): Promise<boolean>;
}
