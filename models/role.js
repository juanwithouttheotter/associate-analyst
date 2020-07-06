const mysql = require('./connection');

exports.selectAllRoles = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM roles;`);
    return data;
}
exports.insertRole = async (role_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO roles SET ?;`, role_obj);
    return data;
}
exports.updateRole = async (id, role_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE roles SET ? WHERE (id = ?);`, [role_obj, id]);
    return data;
}
