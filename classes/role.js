const companyModel = require('../models/company');

class Role {
    constructor(role_obj){
        this._role = role_obj;
    }

    get id(){
        return this._role.id;
    }

    get title(){
        return this._role.title;
    }
    set title(title){
        this._role.title = title;
    }

    get salary(){
        return this._role.salary;
    }
    set salary(salary){
        this._role.salary = salary;
    }

    get department_id(){
        return this._role.department_id;
    }
    set department_id(department_id){
        this._role.department_id = department_id;
    }
    getRole(){
        return this._role;
    }
    async getAllRoles(){
        const table = "roles";
        this._role = await companyModel.selectAllByTable(table);
    }

}

module.exports = Role;