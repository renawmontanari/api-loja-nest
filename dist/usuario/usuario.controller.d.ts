import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
export declare class UsuarioController {
    private UsuarioRepository;
    constructor(UsuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<CriaUsuarioDTO>;
    listarUsuarios(): Promise<CriaUsuarioDTO[]>;
}
