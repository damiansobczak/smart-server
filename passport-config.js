const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        const user = await getUserByEmail(email);
        if (!user.length) {
            return done(null, false, { message: 'No user with that email' });
        }
        if (user.length) {
            try {
                bcrypt.compare(password, user[0].password).then(result => {
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                });
            } catch (e) {
                return done(e);
            }
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user[0]._id)
    });
    passport.deserializeUser((id, done) => {
        done(null, getUserById(id));
    });
}

module.exports = initialize;