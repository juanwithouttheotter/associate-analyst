const mysql = require('./connection');

exports.selectAllDepartments = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM departments;`);
    return data;
}
exports.selectTotalDeptBudget = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT departments.name AS department_name, Sum(salary) AS total_dept_budget FROM ((roles INNER JOIN employees e on roles.id = e.role_id)INNER JOIN departments on departments.id = department_id)  WHERE department_id = ?;`, id)
    return data;
}
exports.insertDepartment = async (department_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO departments SET ?`, department_obj);
    return data;
}
exports.updateDept = async (id, department_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE departments SET ? WHERE (id = ?);`, [department_obj, id]);
    return data;
}
exports.deleteDepartment = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`DELETE FROM departments WHERE id = ?;`, id);
    return data;
}
