"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_repository_1 = require("./usuario.repository");
const CriaUsuario_dto_1 = require("./dto/CriaUsuario.dto");
const usuario_entity_1 = require("./usuario.entity");
const uuid_1 = require("uuid");
let UsuarioController = class UsuarioController {
    UsuarioRepository;
    constructor(UsuarioRepository) {
        this.UsuarioRepository = UsuarioRepository;
    }
    async criaUsuario(dadosDoUsuario) {
        const usuarioEntity = new usuario_entity_1.UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = (0, uuid_1.v4)();
        this.UsuarioRepository.salvar(usuarioEntity);
        return { id: usuarioEntity.id, message: "Usuário criado com sucesso!" };
    }
    async listarUsuarios() {
        return this.UsuarioRepository.listar();
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaUsuario_dto_1.CriaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criaUsuario", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listarUsuarios", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)("/usuarios"),
    __metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map