const validarFormulario = () => {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellidos");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let fechaNacimiento = document.getElementById("fechaNacimiento");
    let genero = document.getElementById("genero");
    let direccion = document.getElementById("direccion");
    let pais = document.getElementById("pais");
    let ciudad = document.getElementById("ciudad");



    if (nombre.value == "") {
        mostrarMensaje("Complete el campo Nombre!", "error");
        nombre.focus();
        return false;
    }
    if (apellido.value == "") {
        mostrarMensaje("Complete el campo Nombre!", "error");
        apellido.focus();
        return false;
    }

    if (email.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        email.focus();
        return false;
    } 
    if (telefono.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        telefono.focus();
        return false;
    }
    if (fechaNacimiento.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        fechaNacimiento.focus();
        return false;
    } 
    if (genero.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        genero.focus();
        return false;
    } 
    if (direccion.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        direccion.focus();
        return false;
    } 
    if (pais.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        pais.focus();
        return false;
    } 
    if (ciudad.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        ciudad.focus();
        return false;
    } 
     

    
    mostrarMensaje("Los datos se guardaron correctamente!", "ok");
    guardarDatos(nombre.value, apellido.value, email.value, telefono.value, fechaNacimiento.value, genero.value, direccion.value, pais.value,ciudad.value);
}

const mostrarMensaje = (texto, tipo) => {
    let colorFondo = (tipo == "error") ? "#FF0000" : "#00FF00";

    Toastify({
        text: texto,
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
            color: 'white',
            background: colorFondo,
        },
    }).showToast();
}

const guardarDatos = (nombre, apellido, email, telefono, fechaNacimiento, genero, direccion, pais, ciudad ) => {
    const datosUsuario = {nombre:nombre, apellido:apellido,email:email, telefono:telefono,fechaNacimiento:fechaNacimiento,genero:genero, direccion:direccion, pais:pais, ciudad:ciudad  }
    localStorage.setItem("texto", JSON.stringify(datosUsuario));
}

document.getElementById("submit-boton").onclick = validarFormulario;