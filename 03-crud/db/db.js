import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;
dotenv.config();

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'granja_abejas',
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT,
}

const pool = new Pool(config);

export default pool;