const validarFormulario = (event) => {
    event.preventDefault(); // Prevent form submission

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellidos");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let fechaNacimiento = document.getElementById("fechaNacimiento");
    let genero = document.querySelector('input[name="genero"]:checked');
    let direccion = document.getElementById("direccion");
    let pais = document.getElementById("pais");
    let ciudad = document.getElementById("ciudad");

    

    if (nombre.value == "") {
        mostrarMensaje("Complete el campo Nombre!", "error");
        nombre.focus();
        return false;
    }
    if (apellido.value == "") {
        mostrarMensaje("Complete el campo apellido!", "error");
        apellido.focus();
        return false;
    }

    if (email.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        email.focus();
        return false;
    } 
    if (telefono.value == "") {
        mostrarMensaje("Complete el campo telefono!", "error");
        telefono.focus();
        return false;
    }
    if (fechaNacimiento.value == "") {
        mostrarMensaje("Complete el campo Fecha de Nacimiento!", "error");
        fechaNacimiento.focus();
        return false;
    } 
    if (genero.value == "") {
        mostrarMensaje("Complete el campo genero!", "error");
        genero.focus();
        return false;
    } 
    if (direccion.value == "") {
        mostrarMensaje("Complete el campo direccion!", "error");
        direccion.focus();
        return false;
    } 
    if (pais.value == "") {
        mostrarMensaje("Complete el campo pais!", "error");
        pais.focus();
        return false;
    } 
    if (ciudad.value == "") {
        mostrarMensaje("Complete el campo ciudad!", "error");
        ciudad.focus();
        return false;
    } 

    mostrarMensaje("WOOF! Registro exitoso. Te contactaremos para el proceso de adopción.", "ok");
    guardarDatos(nombre.value, apellido.value, email.value, telefono.value, fechaNacimiento.value, genero.value, direccion.value, pais.value, ciudad.value);
};

const mostrarMensaje = (texto, tipo) => {
    let colorFondo = (tipo == "error") ? "#FF0000" : "#00FF00";

    Toastify({
        text: texto,
        duration: 2000,
        gravity: "top", 
        position: "center", 
        style: {
            color: 'white',
            background: colorFondo,
        },
    }).showToast();
};

const guardarDatos = (nombre, apellido, email, telefono, fechaNacimiento, genero, direccion, pais, ciudad) => {
    const datosUsuario = { nombre, apellido, email, telefono, fechaNacimiento, genero, direccion, pais, ciudad };
    localStorage.setItem("texto", JSON.stringify(datosUsuario));

    
    const storedData = JSON.parse(localStorage.getItem("texto"));
    console.log(storedData);
};

document.getElementById("submit-boton").onclick = validarFormulario;