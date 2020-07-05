exports.route = (app, connection) => {
    app.get('/status', (req, res) => {
        const status = {
            status: 'ok associate analyst'
        }
        res.json(status);
    });
    //Get info
    app.get('/departments', async (req, res) => {
        const [data] = await connection.query(`SELECT * FROM departments;`);
        res.json(data);
    });
    app.get('/roles', async (req, res) => {
        const [data] = await connection.query(`SELECT * FROM roles;`);
        res.json(data);
    });
    app.get('/employees', async (req, res) => {
        const [data] = await connection.query(`SELECT * FROM employees;`);
        res.json(data);
    });
    //post new info
    app.post('/departments', async (req, res) =>{
        const [data] = await connection.query(`INSERT INTO departments SET ?;`, req.body);
        res.json({created: true, ...req.body});
    });
    app.post('/roles', async (req, res) =>{
        const [data] = await connection.query(`INSERT INTO roles SET ?;`, req.body);
        res.json({created: true, ...req.body});
    });
    app.post('/employees', async (req, res) =>{
        const [data] = await connection.query(`INSERT INTO employees SET ?;`, req.body);
        res.json({created: true, ...req.body});
    });
    //update info
    app.patch('/departments/:id', async (req, res) =>{
        const id = req.params.id;
        const update = req.body;
        const [data] = await connection.query(`UPDATE associate_analystdb.departments SET ? WHERE (id = ?);`, [update, id]);
        res.json({updated: true, ...req.body});
    });
    app.patch('/roles/:id', async (req, res) =>{
        const id = req.params.id;
        const update = req.body;
        const [data] = await connection.query(`UPDATE roles SET ? WHERE (id = ?);`, [update, id]);
        res.json({updated: true, ...req.body});
    });
    app.patch('/employees/:id', async (req, res) =>{
        const id = req.params.id;
        const update = req.body;
        const [data] = await connection.query(`UPDATE employees SET ? WHERE (id = ?);`, [update, id]);
        res.json({updated: true, ...req.body});
    });
    // Only Update employee managers
    app.patch('/employees/managers/:id', async (req, res) =>{
        const id = req.params.id;
        const update = req.body;
        const [data] = await connection.query(`UPDATE employees SET ? WHERE manager_id IS NULL AND role_id = ?;`,[update, id]);
        res.json({updated: true, ...req.body});
    });
    //get employees by manager id
    app.get('/employees/managers/:id', async (req,res)=>{
        const id = req.params.id;
        const [data] = await connection.query(`SELECT manager.id AS manager_id, CONCAT(manager.first_name," " ,manager.last_name) AS manager_name, employee.id AS employee_id, concat(employee.first_name," ", employee.last_name) AS employee_name FROM employees manager INNER JOIN employees employee ON manager.id = employee.manager_id WHERE  manager.id = ?;`, id);
        res.json(data);
    });
    //get total dept budget
    app.get('/departments/budget/:id', async (req, res) =>{
        const id = req.params.id;
        const [data] = await connection.query(`SELECT departments.name AS department_name, Sum(salary) AS total_dept_budget FROM ((roles INNER JOIN employees e on roles.id = e.role_id)INNER JOIN departments on departments.id = department_id)  WHERE department_id = ?;`, id);
        res.json(data);
    });
    //if manager is deleted, employees manager id is set to null.
    app.delete('/employees/:id', async (req,res) =>{
        const id = req.params.id;
        const [data] = await connection.query(`DELETE FROM employees WHERE id = ?;`,id);
        res.json({deleted: true, ...data})
    });
    //If role is deleted, so are employees in that role. 
    app.delete('/roles/:id', async (req,res) =>{
        const id = req.params.id;
        const [data] = await connection.query(`DELETE FROM roles WHERE id = ?;`,id);
        res.json({deleted: true, ...data})
    });
    //If department is deleted, roles and employees are deleted. 
    app.delete('/departments/:id', async (req,res) =>{
        const id = req.params.id;
        const [data] = await connection.query(`DELETE FROM departments WHERE id = ?;`,id);
        res.json({deleted: true, ...data})
    });
}
