// Función para agregar un nuevo registro a la tabla
function agregarRegistro() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value; // Obtener el valor del campo "nombre"
    var apellido = document.getElementById("apellido").value; // Obtener el valor del campo "apellido"
    var email = document.getElementById("email").value; // Obtener el valor del campo "email"
    var domicilio = document.getElementById("domicilio").value; // Obtener el valor del campo "domicilio"
    var estado = document.getElementById("estado").value; // Obtener el valor del campo "estado"
    var contacto = document.getElementById("contactarme").checked ? "Sí" : "No"; // Obtener el valor del campo "contactarme" y convertirlo a texto
    var comentario = document.getElementById("comentario").value; // Obtener el valor del campo "comentario"

    // Crear una nueva fila de tabla con los datos del cliente
    var fila = "<tr>" +
        "<td>" + nombre + "</td>" + // Mostrar el nombre en la primera celda de la fila
        "<td>" + apellido + "</td>" + // Mostrar el apellido en la segunda celda de la fila
        "<td>" + email + "</td>" + // Mostrar el email en la tercera celda de la fila
        "<td>" + domicilio + "</td>" + // Mostrar el domicilio en la cuarta celda de la fila
        "<td>" + estado + "</td>" + // Mostrar el estado en la quinta celda de la fila
        "<td>" + contacto + "</td>" + // Mostrar el contacto en la sexta celda de la fila
        "<td>" + comentario + "</td>" + // Mostrar el comentario en la séptima celda de la fila
        "<td><button class='btn btn-warning btn-editar'>Editar</button>" + // Botón de editar
        "<button class='btn btn-secondary btn-modificar d-none'>Modificar</button></td>" + // Botón de modificar
        "</tr>";

    // Agregar la fila a la tabla
    document.querySelector(".tabla-registros tbody").innerHTML += fila;

    // Limpiar los campos del formulario después de agregar el registro
    document.getElementById("nombre").value = ""; // Limpiar el campo "nombre"
    document.getElementById("apellido").value = ""; // Limpiar el campo "apellido"
    document.getElementById("email").value = ""; // Limpiar el campo "email"
    document.getElementById("domicilio").value = ""; // Limpiar el campo "domicilio"
    document.getElementById("estado").value = "Estado de Bolivia"; // Restablecer el valor predeterminado del campo "estado"
    document.getElementById("contactarme").checked = false; // Desmarcar el campo "contactarme"
    document.getElementById("comentario").value = ""; // Limpiar el campo "comentario"
}

// Función para modificar un registro existente en la tabla
function modificarRegistro() {
    // Obtener la fila seleccionada para modificar
    var filaSeleccionada = document.querySelector(".tabla-registros tbody tr.seleccionado");

    // Verificar si se ha seleccionado una fila para modificar
    if (filaSeleccionada) {
        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById("nombre").value; // Obtener el valor del campo "nombre"
        var apellido = document.getElementById("apellido").value; // Obtener el valor del campo "apellido"
        var email = document.getElementById("email").value; // Obtener el valor del campo "email"
        var domicilio = document.getElementById("domicilio").value; // Obtener el valor del campo "domicilio"
        var estado = document.getElementById("estado").value; // Obtener el valor del campo "estado"
        var contacto = document.getElementById("contactarme").checked ? "Sí" : "No"; // Obtener el valor del campo "contactarme" y convertirlo a texto
        var comentario = document.getElementById("comentario").value; // Obtener el valor del campo "comentario"

        // Actualizar los datos de la fila seleccionada con los nuevos valores
        filaSeleccionada.cells[0].textContent = nombre; // Actualizar el nombre en la primera celda de la fila
        filaSeleccionada.cells[1].textContent = apellido; // Actualizar el apellido en la segunda celda de la fila
        filaSeleccionada.cells[2].textContent = email; // Actualizar el email en la tercera celda de la fila
        filaSeleccionada.cells[3].textContent = domicilio; // Actualizar el domicilio en la cuarta celda de la fila
        filaSeleccionada.cells[4].textContent = estado; // Actualizar el estado en la quinta celda de la fila
        filaSeleccionada.cells[5].textContent = contacto; // Actualizar el contacto en la sexta celda de la fila
        filaSeleccionada.cells[6].textContent = comentario; // Actualizar el comentario en la séptima celda de la fila

        // Limpiar los campos del formulario después de modificar el registro
        document.getElementById("nombre").value = ""; // Limpiar el campo "nombre"
        document.getElementById("apellido").value = ""; // Limpiar el campo "apellido"
        document.getElementById("email").value = ""; // Limpiar el campo "email"
        document.getElementById("domicilio").value = ""; // Limpiar el campo "domicilio"
        document.getElementById("estado").value = "Estado de Bolivia"; // Restablecer el valor predeterminado del campo "estado"
        document.getElementById("contactarme").checked = false; // Desmarcar el campo "contactarme"
        document.getElementById("comentario").value = ""; // Limpiar el campo "comentario"

        // Remover la clase 'seleccionado' de la fila seleccionada
        filaSeleccionada.classList.remove("seleccionado");

        // Ocultar el botón de modificar
        filaSeleccionada.querySelector(".btn-modificar").classList.add("d-none");
    } else {
        // Si no se ha seleccionado ninguna fila, mostrar un mensaje de alerta
        alert("Por favor, seleccione un registro para modificar.");
    }
}

// Event listener para el botón "Enviar"
document.getElementById("btn-enviar").addEventListener("click", function() {
    agregarRegistro();
});

// Event listener para los botones "Editar" en cada fila de la tabla
//Estos event listeners permitirán a los usuarios editar los registros de la tabla.

document.querySelector(".tabla-registros tbody").addEventListener("click", function(event) {
    if (event.target && event.target.matches(".btn-editar")) {
        var botonEditar = event.target;
        var fila = botonEditar.closest("tr");

        // Marcar la fila como seleccionada
        fila.classList.add("seleccionado");

        // Mostrar el botón "Modificar" en la fila seleccionada
        fila.querySelector(".btn-modificar").classList.remove("d-none");

        // Obtener los valores de la fila seleccionada y llenar el formulario con ellos
        document.getElementById("nombre").value = fila.cells[0].textContent; // Llenar el campo "nombre" con el valor de la primera celda de la fila
        document.getElementById("apellido").value = fila.cells[1].textContent; // Llenar el campo "apellido" con el valor de la segunda celda de la fila
        document.getElementById("email").value = fila.cells[2].textContent; // Llenar el campo "email" con el valor de la tercera celda de la fila
        document.getElementById("domicilio").value = fila.cells[3].textContent; // Llenar el campo "domicilio" con el valor de la cuarta celda de la fila
        document.getElementById("estado").value = fila.cells[4].textContent; // Llenar el campo "estado" con el valor de la quinta celda de la fila
        document.getElementById("contactarme").checked = fila.cells[5].textContent === "Sí"; // Llenar el campo "contactarme" según el valor de la sexta celda de la fila
        document.getElementById("comentario").value = fila.cells[6].textContent; // Llenar el campo "comentario" con el valor de la séptima celda de la fila
    }
});

// Event listener para el botón "Modificar"
document.querySelector(".tabla-registros tbody").addEventListener("click", function(event) {
    if (event.target && event.target.matches(".btn-modificar")) {
        modificarRegistro();
    }
});
