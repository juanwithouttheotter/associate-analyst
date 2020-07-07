const roleModel = require('../models/role');

class Role {
    constructor(role_obj) {
        this._role = role_obj;
    }

    get id() {
        return this._role.id;
    }

    get title() {
        return this._role.title;
    }
    set title(title) {
        this._role.title = title;
    }

    get salary() {
        return this._role.salary;
    }
    set salary(salary) {
        this._role.salary = salary;
    }

    get department_id() {
        return this._role.department_id;
    }
    set department_id(department_id) {
        this._role.department_id = department_id;
    }
    getRole() {
        return this._role;
    }
    merge(new_role) {
        this._role = ({ ...this._role, ...new_role });
    }
    async getAllRoles() {
        this._role = await roleModel.selectAllRoles();
    }
    async insertRole() {
        const results = await roleModel.insertRole(this._role);
        this._role.id = results.insertId;
    }
    async updateRole(id) {
        await roleModel.updateRole(id, this._role);
    }
    async deleteRole(id) {
        await roleModel.deleteRole(id);
    }

}

module.exports = Role;