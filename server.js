const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = 9000;

routes.route(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, () => { console.log("App listening on PORT: " + PORT) });