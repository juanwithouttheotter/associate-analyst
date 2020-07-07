const departmentModel = require('../models/department');

class Department {
    constructor(department_obj) {
        this._department = department_obj;
    }

    get id() {
        return this._department.id;
    }

    get name() {
        return this._department.name;
    }
    set name(name) {
        this._department.name = name;
    }
    getDepartment() {
        return this._department;
    }
    merge(new_department) {
        this._department = ({ ...this._department, ...new_department });
    }
    async getAllDepartments() {
        this._department = await departmentModel.selectAllDepartments();
    }
    async getBudget(id) {
        this._department = await departmentModel.selectTotalDeptBudget(id);
    }
    async insertDepartment() {
        const results = await departmentModel.insertDepartment(this._department);
        this._department.id = results.insertId;
    }
    async updateDept(id) {
        await departmentModel.updateDept(id, this._department);
    }
    async deleteDepartment(id) {
        await departmentModel.deleteDepartment(id);
    }


}

module.exports = Department;