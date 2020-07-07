const Department = require('../classes/department');

exports.read = async (req, res) => {
    const department = new Department();
    await department.getAllDepartments();
    res.json(department.getDepartment());
}
exports.readBudget = async (req, res) => {
    const id = req.params.id;
    const department = new Department();
    await department.getBudget(id);
    res.json(department.getDepartment());
}
exports.create = async (req, res) => {
    const department = new Department(req.body);
    await department.insertDepartment();
    res.json(department.getDepartment());
}
exports.update = async (req, res) => {
    const id = req.params.id;
    const department = new Department();
    department.merge(req.body);
    await department.updateDept(id);
    res.json(department.getDepartment());
    
}
exports.delete = async (req,res) => {
    const id = req.params.id;
    const department = new Department();
    await department.deleteDepartment(id);
    res.json({deleted: true});
}