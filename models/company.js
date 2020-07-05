const mysql = require('./connection');

exports.selectAllByTable = async (table) => {
    const connection = await mysql.connect();
    const queryString = `SELECT * FROM ${table};`
    const [data] = await connection.query(queryString);
    return data;
}
