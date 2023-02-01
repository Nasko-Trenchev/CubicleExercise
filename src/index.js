const express = require("express");

const config = require('./config');
const initDatabase = require("./config/databaseInit");
const setupViewEngine = require('./config/setupViewEngine');
const routs = require("./routes");


const app = express();

setupViewEngine(app);

app.use(express.static('src/public'))
app.use(express.urlencoded({extended: false}));
app.use(routs);

initDatabase()
.then(
app.listen(config.PORT, () => {
    console.log("Server is running on port 5000...")
}))
.catch((err) => console.log(err.message));