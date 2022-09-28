let botonBuscar = document.getElementById("boton-busca");
let buscador = document.getElementById("buscador");

function confirmar() {
    const buscadorText = document.getElementById("buscador").value;
    if (confirm('Esta es la url actual: ' + location.href + ", estás seguro de que quieres ir a :" + buscadorText)) {
        if (confirm("Quieres abrir el enlace en esta página?")) {
            location.assign(buscadorText);
        } else {
            open(buscadorText);
        }
    }
}



