import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioController {
    private UsuarioRepository;
    constructor(UsuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        id: string;
        message: string;
    }>;
    listarUsuarios(): Promise<UsuarioEntity[]>;
}
