const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose')  

const UserSchema = new mongoose.Schema({
    username: String,
    nombreUsuario: String,
    password: String,
    horario: String,
    seleccionado: {type: String, default: 'nada'},
    especialidad: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);