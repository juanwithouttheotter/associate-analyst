const companyModel = require('../models/company');

class Department {
    constructor(department_obj){
        this._department = department_obj;
    }

    get id(){
        return this._department.id;
    }

    get title(){
        return this._department.title;
    }
    set title(title){
        this._department.title = title;
    }

    get salary(){
        return this._department.salary;
    }
    set salary(salary){
        this._department.salary = salary;
    }

    get department_id(){
        return this._department.department_id;
    }
    set department_id(department_id){
        this._department.department_id = department_id;
    }
    getDepartment(){
        return this._department;
    }
    async getAllDepartments(){
        const table = "departments";
        this._department = await companyModel.selectAllByTable(table);
    }

}

module.exports = Department;