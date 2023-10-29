const express = require('express');
const mongoose = require('mongoose');
const { Auth, isAuthenticated } = require('./auth.js'); // Importa objetos relacionados con la autenticación.
const fichaPacientes = require('./controlador.js'); // Importa funciones relacionadas con la gestión de pacientes.

const cors = require('cors');
const app = express();
app.use(express.json()); // Habilita el análisis de JSON en las solicitudes HTTP.
app.use(cors()); // Habilita el soporte para CORS (Cross-Origin Resource Sharing).

const port = 8000; // Puerto en el que se ejecutará el servidor web.

async function conectarDB() {
  try {
    await mongoose.connect(`mongodb://roquebj1:12345@mongDB:27017/FinalDW?authSource=admin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB con Mongoose');
  } catch (error) {
    console.error('Error al conectar a MongoDB con Mongoose:', error);
  }
}
conectarDB(); // Conecta a la base de datos al inicio de la aplicación.

app.post('/crear-paciente', fichaPacientes.crearPaciente); // Ruta para crear un paciente.
app.get('/obtener-pacientes', fichaPacientes.obtenerPacientes); // Ruta para obtener todos los pacientes.
app.get('/obtener-paciente/:id', fichaPacientes.obtenerPacienteId); // Ruta para obtener un paciente por ID.
app.put('/actualizar-paciente/:id', fichaPacientes.actualizarPaciente); // Ruta para actualizar un paciente por ID.
app.delete('/borrar-paciente/:id', fichaPacientes.borrarPaciente); // Ruta para eliminar un paciente por ID.

app.use(express.static(`${__dirname}/public`)); // Habilita la entrega de archivos estáticos desde el directorio "public".

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`); // Ruta de la página de inicio.
});

app.get('*', (req, res) => {
    res.status(404).send('404 not found'); // Ruta para manejar solicitudes desconocidas con un código 404.
});

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
