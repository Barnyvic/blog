"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize()
    .then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
    .catch((error) => console.log('TypeORM connection error: ', error));
//# sourceMappingURL=index.js.map