import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
export declare class UsuarioController {
    private UsuarioRepository;
    constructor(UsuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        message: string;
    }>;
    listarUsuarios(): Promise<ListaUsuarioDTO[]>;
    atualizarUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<{
        usuario: Promise<UsuarioEntity>;
        message: string;
    }>;
    deletarUsuario(id: string): Promise<{
        usuario: Promise<UsuarioEntity>;
        message: string;
    }>;
}
