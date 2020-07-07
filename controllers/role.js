const Role = require('../classes/role');

exports.read = async (req, res) => {
    const role = new Role();
    await role.getAllRoles();
    res.json(role.getRole());
}
exports.create = async (req, res) => {
    const role = new Role(req.body);
    await role.insertRole();
    res.json(role.getRole());
}
exports.update = async (req, res) =>  {
    const id = req.params.id;
    const role = new Role();
    role.merge(req.body);
    await role.updateRole(id);
    res.json(role.getRole());
}
exports.delete = async (req,res) => {
    const id = req.params.id;
    const role = new Role();
    await role.deleteRole(id);
    res.json({deleted: true});
}
