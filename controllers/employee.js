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
exports.readByManager = async (req, res) => {
    const id = req.params.id;
    const employee = new Employee();
    await employee.getByManager(id);
    res.json(employee.getEmployee());
}
exports.create = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.insertEmployee();
    res.json(employee.getEmployee());
}
exports.update = async (req, res) => {
    const id = req.params.id;
    const employee = new Employee();
    employee.merge(req.body);
    await employee.updateEmployee(id);
    res.json(employee.getEmployee());
}
exports.updateManagersById = async (req, res) => {
    const managerId = req.params.id;
    const employee = new Employee();
    employee.merge(req.body);
    await employee.updateManager(managerId);
    res.json(employee.getEmployee());
}
exports.delete = async (req,res) => {
    const id = req.params.id;
    const employee = new Employee();
    await employee.deleteEmployee(id);
    res.json({deleted: true});
}


