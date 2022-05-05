const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
require('dotenv').config();
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
});