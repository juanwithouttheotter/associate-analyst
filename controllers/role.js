const Role = require('../classes/role');

exports.read = async (req, res) => {
    const role = new Role();
    await role.getAllRoles();
    res.json(role.getRole());
}
