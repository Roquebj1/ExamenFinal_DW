const mongoose = require('mongoose');

// Define el esquema del paciente
const pacienteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  apellidos: { type: String, required: true },
  fechadeNacimiento: { type: Date, required: true },
  genero: { type: String, enum: ['Masculino', 'Femenino', 'Otro'] },
  direccion: {type: String},
  telefono: {type: String}
});

// Crea el modelo de Paciente
const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;