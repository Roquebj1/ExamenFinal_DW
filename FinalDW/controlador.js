// Importa el modelo de Paciente definido en 'modelado.js'
const Paciente = require('./modelado.js');

// Objeto que contiene métodos para operaciones con pacientes
const fichaPacientes = {
    // Método para crear un paciente
    crearPaciente: async (req, res) => {
        try {
            // Crea una instancia de Paciente con los datos del cuerpo de la solicitud
            const paciente = new Paciente(req.body);
            console.log(paciente);

            // Guarda el paciente en la base de datos y responde con el paciente guardado
            const pacienteGuardado = await paciente.save();
            res.status(201).json(pacienteGuardado);
        } catch (error) {
            // En caso de error, responde con un código de error y un mensaje
            res.status(500).json({ error: 'Error al crear el paciente' });
        }
    },

    // Método para obtener todos los pacientes
    obtenerPacientes: async (req, res) => {
        try {
            // Obtiene todos los pacientes de la base de datos
            const pacientes = await Paciente.find();
            res.status(200).json(pacientes);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener pacientes' });
        }
    },

    // Método para obtener un paciente por su ID
    obtenerPacienteId: async (req, res) => {
        try {
            // Busca un paciente por su ID en la base de datos
            const paciente = await Paciente.findById(req.params.id);
            if (!paciente) {
                return res.status(404).json({ error: 'Paciente no encontrado' });
            }
            res.status(200).json(paciente);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el paciente' });
        }
    },

    // Método para actualizar un paciente por su ID
    actualizarPaciente: async (req, res) => {
        try {
            // Actualiza un paciente por su ID con los datos del cuerpo de la solicitud
            const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            if (!paciente) {
                return res.status(404).json({ error: 'Paciente no encontrado' });
            }
            res.status(200).json(paciente);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el paciente' });
        }
    },

    // Método para eliminar un paciente por su ID
    borrarPaciente: async (req, res) => {
        try {
            // Elimina un paciente por su ID de la base de datos
            const paciente = await Paciente.findByIdAndRemove(req.params.id);
            if (!paciente) {
                return res.status(404).json({ error: 'Paciente no encontrado' });
            }
            // Responde con un código 204 (Sin contenido) para indicar éxito en la eliminación
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el paciente' });
        }
    }
};

module.exports = fichaPacientes;
