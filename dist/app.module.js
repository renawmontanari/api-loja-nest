"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_module_1 = require("./usuario/usuario.module");
const usuario_controller_1 = require("./usuario/usuario.controller");
const usuario_repository_1 = require("./usuario/usuario.repository");
const email_unico_validator_1 = require("./usuario/validacao/email-unico.validator");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [usuario_module_1.UsuarioModule],
        controllers: [usuario_controller_1.UsuarioController],
        providers: [usuario_repository_1.UsuarioRepository, email_unico_validator_1.EmailUnicoValidator],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map