// Variables globales
const pacientesList = document.getElementById('pacientes-list');
const pacienteForm = document.getElementById('paciente-form');

// Función para agregar un nuevo paciente
pacienteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const apellidosInput = document.getElementById('apellidos');
    const fechadeNacimientoInput = document.getElementById('fechadeNacimiento');
    const generoInput = document.getElementById('genero');
    const direccionInput = document.getElementById('direccion');
    const telefonoInput = document.getElementById('telefono');

    // Crear un elemento div para mostrar los datos del paciente
    const pacienteDiv = document.createElement('div');
    pacienteDiv.classList.add('paciente-item');

    // Mostrar los datos ingresados por el usuario
    const name = document.createElement('p');
    name.textContent = `Nombre: ${nameInput.value}`;
    const apellidos = document.createElement('p');
    apellidos.textContent = `Apellidos: ${apellidosInput.value}`;
    const fechadeNacimiento = document.createElement('p');
    fechadeNacimiento.textContent = `Fecha de Nacimiento: ${fechadeNacimientoInput.value}`;
    const genero = document.createElement('p');
    genero.textContent = `Género: ${generoInput.value}`;
    const direccion = document.createElement('p');
    direccion.textContent = `Dirección: ${direccionInput.value}`;
    const telefono = document.createElement('p');
    telefono.textContent = `Teléfono: ${telefonoInput.value}`;

    // Botones de Editar y Eliminar
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => {
        // Lógica para editar el paciente
        alert('Editar paciente: aquí debes implementar la lógica para editar los datos del paciente.');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        // Lógica para eliminar el paciente
        pacienteDiv.remove();
    });

    // Agregar los elementos al div del paciente
    pacienteDiv.appendChild(name);
    pacienteDiv.appendChild(apellidos);
    pacienteDiv.appendChild(fechadeNacimiento);
    pacienteDiv.appendChild(genero);
    pacienteDiv.appendChild(direccion);
    pacienteDiv.appendChild(telefono);
    pacienteDiv.appendChild(editButton);
    pacienteDiv.appendChild(deleteButton);

    // Agregar el div del paciente a la lista de pacientes
    pacientesList.appendChild(pacienteDiv);

    // Limpia el formulario
    nameInput.value = '';
    apellidosInput.value = '';
    fechadeNacimientoInput.value = '';
    generoInput.value = '';
    direccionInput.value = '';
    telefonoInput.value = '';
});
