const validationPlace = (value, regex) => value && !!regex.exec(value)


const validarForm = () => {
    let status = true;

    const REG_EXP_NAME = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const REG_EXP_EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;


    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;

    
    status = validationPlace(email, REG_EXP_EMAIL);
    status = validationPlace(contrasena, REG_EXP_NAME);



    if (status) {

        alert("sesion iniciada")
    }

    return status;
}

function limpiarform() {
    Swal.fire('limpieza completada');
    document.getElementById("contacto-frm").reset();
}

window.onload = () => {
    var botonLimpiar;
    botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarform;
}

function selectElement(e) {
    console.log('selected', e);
}