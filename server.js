const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = 9000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.route(app);


app.listen(PORT, () => { console.log("App listening on PORT: " + PORT) });