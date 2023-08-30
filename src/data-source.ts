import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
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
