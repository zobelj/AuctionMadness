import { Strategy as LocalStrategy } from 'passport-local'
import UserModel from 'models/user'

const PassportStrategy = (passport) => {
    passport.use(
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, (email, password, done) => {
            UserModel.findOne({ email }, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                if (password === user.password)
                    return done(null, user);
                else
                    return done(null, false);
            })
        }
        ))
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        UserModel.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                email: user.email,
            };
            cb(err, userInformation);
        });
    });
}

export default PassportStrategy;