const employee = require('./controllers/employee');
const department = require('./controllers/department');
const role = require('./controllers/role');


exports.route = (app) => {

    app.get('/status', employee.status);

    //Get info
    app.get('/departments', department.read);
    app.get('/roles', role.read);
    app.get('/employees', employee.read);
        //get total dept budget
    app.get('/departments/budget/:id', department.readBudget);
    //get employees by manager id
    app.get('/employees/managers/:id', employee.readByManager);

    //post new info
    app.post('/departments', department.create);
    app.post('/roles', role.create);
    app.post('/employees', employee.create);

    //update info
    app.patch('/departments/:id', department.update);
    app.patch('/roles/:id', role.update);
    app.patch('/employees/:id', employee.update);
        //Only update employee managers by id
    app.patch('/employees/managers/:id', employee.updateManagersById);

    
   

    //if manager is deleted, employees manager id is set to null.
    app.delete('/employees/:id', async (req, res) => {
        const id = req.params.id;
        const [data] = await connection.query(`DELETE FROM employees WHERE id = ?;`, id);
        res.json({ deleted: true, ...data })
    });
    //If role is deleted, so are employees in that role. 
    app.delete('/roles/:id', async (req, res) => {
        const id = req.params.id;
        const [data] = await connection.query(`DELETE FROM roles WHERE id = ?;`, id);
        res.json({ deleted: true, ...data })
    });
    //If department is deleted, roles and employees are deleted. 
    app.delete('/departments/:id', async (req, res) => {
        const id = req.params.id;
        const [data] = await connection.query(`DELETE FROM departments WHERE id = ?;`, id);
        res.json({ deleted: true, ...data })
    });
}
