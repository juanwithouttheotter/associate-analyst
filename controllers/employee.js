const Employee = require('../classes/employee');

exports.status = async (req, res) => {
    const status = {
        status: 'ok associate analyst'
    }
    res.json(status);
}
exports.read = async (req, res) => {
    const employee = new Employee();
    await employee.getAllEmployees();
    res.json(employee.getEmployee());
}
