import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
export declare class UsuarioController {
    private UsuarioRepository;
    constructor(UsuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        message: string;
    }>;
    listarUsuarios(): Promise<ListaUsuarioDTO[]>;
}
