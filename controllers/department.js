const Department = require('../classes/department');

exports.read = async (req, res) => {
    const department = new Department();
    await department.getAllDepartments();
    res.json(department.getDepartment());
}