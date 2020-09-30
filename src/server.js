const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');
const { get } = require("./helpers/config.helper");

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to crud server." });
});

require('./routes/user.route')(app);

app.listen(get('APP_PORT'), () => {
    console.log(`Server is running on port ${get('APP_PORT')}. Open http://localhost:${get('APP_PORT')}.`);
});
