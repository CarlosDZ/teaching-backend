import pool from '../db/db.js';

export const newLogService = async (this_moment, metodo, url, remote_address) => {
        const result = await pool.query(
            'INSERT INTO logs (fecha_log, metodo, url, remote_address) VALUES ($1, $2, $3, $4) RETURNING *',
            [this_moment, metodo, url, remote_address]
        );

        if (result.rows.length === 0) {
            throw new Error('Cliente no encontrado');
        }
        return result.rows[0];
}