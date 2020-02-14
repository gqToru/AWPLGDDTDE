const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose')  

const UserSchema = new mongoose.Schema({
    username: String,
    nombreUsuario: String,
    password: String,
    firstHorario: {type: Boolean, default: true},
    horario: String,
    seleccionado: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);