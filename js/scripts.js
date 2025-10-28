// scripts.js

// Función para cargar fragmentos HTML (header y footer)
async function cargarFragmento(id, archivo) {
    const contenedor = document.getElementById(id);
    const respuesta = await fetch(archivo);
    const contenido = await respuesta.text();
    contenedor.innerHTML = contenido;
}

// Llamadas para header y footer
cargarFragmento("header-placeholder", "../componentes/header.html");
cargarFragmento("footer-placeholder", "../componentes/footer.html");

// Funciones de navegación
function siguienteEjercicio(destino) {
    window.location.href = destino;
}

function volver(destino) {
    window.location.href = destino;
}

function irInicio() {
    window.location.href = '../index.html';
}
