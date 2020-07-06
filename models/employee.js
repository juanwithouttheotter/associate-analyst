const mysql = require('./connection');

exports.selectAllEmployees = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM employees;`);
    return data;
}
exports.selectByManager = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT manager.id AS manager_id, CONCAT(manager.first_name," " ,manager.last_name) AS manager_name, employee.id AS employee_id, concat(employee.first_name," ", employee.last_name) AS employee_name FROM employees manager INNER JOIN employees employee ON manager.id = employee.manager_id WHERE  manager.id = ?;`, id)
    return data;
}
exports.insertEmployee = async (employee_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO employees SET ?`, employee_obj);
    return data;
}
exports.updateManager = async (managerId, employee_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE employees SET ? WHERE manager_id IS NULL AND role_id = ?;`, [employee_obj, managerId]);
    return data;
}


