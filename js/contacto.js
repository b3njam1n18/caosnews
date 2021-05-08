const validationPlace = (value, regex) => value && !!regex.exec(value)


const validarForm = () => {
    let status = true;

    const REG_EXP_NAME = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const REG_EXP_EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    let name = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let comentarios = document.getElementById("comentarios").value;


    status = validationPlace(name, REG_EXP_NAME);
    status = validationPlace(email, REG_EXP_EMAIL);
    status = (comentarios.length < 255)



    if (status) {

        alert("enviado correctamente")
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