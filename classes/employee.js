const companyModel = require('../models/company');
class Employee {
    constructor(employee_obj){
        this._employee = employee_obj;
    }

    get id(){
        return this._employee.id;
    }

    get first_name(){
        return this._employee.first_name;
    }
    set first_name(first_name){
        this._employee.first_name = first_name;
    }

    get last_name(){
        return this._employee.last_name;
    }
    set last_name(last_name){
        this._employee.last_name = last_name;
    }

    get role_id(){
        return this._employee.role_id;
    }
    set role_id(role_id){
        this._employee.role_id = role_id;
    }

    get manager_id(){
        return this._employee.manager_id;
    }
    set manager_id(manager_id){
        this._employee.manager_id = manager_id;
    }
    getEmployee(){
        return this._employee;
    }
    async getAllEmployees(){
        const table = "employees";
        this._employee = await companyModel.selectAllByTable(table);
    }

}

module.exports = Employee;