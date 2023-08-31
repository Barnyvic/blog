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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("./BaseEntity");
const UsersEntity_1 = require("./UsersEntity");
let PostEntity = class PostEntity extends BaseEntity_1.BaseEntity {
};
exports.PostEntity = PostEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsersEntity_1.UsersEntity, (user) => user.posts, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", UsersEntity_1.UsersEntity)
], PostEntity.prototype, "author", void 0);
exports.PostEntity = PostEntity = __decorate([
    (0, typeorm_1.Entity)()
], PostEntity);
//# sourceMappingURL=PostEntity.js.map