const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
require('dotenv').config();
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const routes = require('./controllers/index');

const app = express();
const PORT = 3001;

const hbs = exphbs.create();

const sess = {
    secret: 'Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

app.use(routes);

// sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
    console.log(`Now listening on Port: ${PORT}`)
      sequelize.sync({force: false})
  });
  // });