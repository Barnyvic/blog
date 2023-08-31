"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'Victor',
    password: 'Yungvicky007',
    database: 'Blog',
    entities: ['dist/entities/**/*.js'],
    synchronize: true,
    logging: false,
    migrations: ['dist/migrations/**/*.js'],
});
//# sourceMappingURL=data-source.js.map