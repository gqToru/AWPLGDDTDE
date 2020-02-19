const mongoose = require('mongoose')


const CarreraSchema = new mongoose.Schema({
    agronomia: String,
    petroleo: String,
    sistemas: String,
    produccion: String,
    administracion: String,
    contaduria: String,
    rrhh: String,
    alimentos: String,
});

module.exports = mongoose.model('Carrera', CarreraSchema);