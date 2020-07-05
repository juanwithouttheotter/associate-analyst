const mysql = require('mysql2/promise');

exports.connect = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "associate_analystDB"
    });
    return connection;
}