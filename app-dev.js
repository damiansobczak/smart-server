const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const session = require('express-session');
const User = require('./models/User');
const user = require('./routes/user');
const bcrypt = require('bcrypt');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const flash = require('connect-flash');
const initializePassport = require('./passport-config');

initializePassport(
    passport, email => {
        return User.find({ email: email }).exec().then(user => {
            return user;
        }).catch(err => console.log(err));
    }, id => {
        return User.find({ "_id": id }).exec().then(user => {
            return user;
        }).catch(err => console.log(err));
    });
const app = express();

const statistics = require('./routes/statistics');
const temperature = require('./routes/temperature');
const reports = require('./routes/reports');
const machine = require('./routes/machine');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/statistics', statistics);
app.use('/temperature', temperature);
app.use('/reports', reports);
app.use('/machine', machine);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("DB Connected!"));
const db = mongoose.connection;
app.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'secretcookie$%^',
    cookie: {
        maxAge: 100 * 60 * 60 * 2,
        sameSite: true,
        secure: false
    },
    store: new MongoStore({ mongooseConnection: db })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use('/user', user);

app.get('/isAuthenticated', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true });
    } else {
        res.json({ isAuthenticated: false });
    }
});

app.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { res.json(err) }
        if (!user) { return res.json(info); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.json({ user });
        });
    })(req, res, next);
});

app.listen(3000);