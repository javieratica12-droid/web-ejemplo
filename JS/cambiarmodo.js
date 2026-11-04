alert("el JS se ejecuta correctamente")

function cambiarmodo(){
    alert ("Se cambia el color de la web")

    const enlace = document.getElementById("tema-oscuro");

    enlace.disabled = !enlace.disabled;
}