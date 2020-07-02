exports.route = (app, connection) => {
    app.get('/status', (req, res) => {
        const status = {
            status: 'ok associate analyst'
        }
        res.json(status);
    });


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
}
