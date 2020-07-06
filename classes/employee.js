const employeeModel = require('../models/employee');
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
    merge(new_employee){
        this._employee = ({...this._employee, ...new_employee});
    }
    async getAllEmployees(){
        this._employee = await employeeModel.selectAllEmployees();
    }
    async getByManager(id) {
        this._employee = await employeeModel.selectByManager(id);
    }
    async insertEmployee() {
        const results = await employeeModel.insertEmployee(employee_obj);
        this._employee.id = results.insertId;
    }
    async updateEmployee(id){
        await employeeModel.updateEmployee(id, this._employee);
    }

}

module.exports = Employee;