// scripts.js

// 🔹 Carga de fragmentos (header y footer)
async function cargarFragmento(id, archivo) {
    try {
        const contenedor = document.getElementById(id);
        if (!contenedor) return;

        const respuesta = await fetch(archivo);
        if (!respuesta.ok) throw new Error(`Error al cargar ${archivo}`);

        const contenido = await respuesta.text();
        contenedor.innerHTML = contenido;
    } catch (error) {
        console.error(`No se pudo cargar el fragmento: ${error.message}`);
    }
}

// 🔹 Cargar header y footer cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    cargarFragmento("header-placeholder", `../componentes/header.html`);
    cargarFragmento("footer-placeholder", `../componentes/footer.html`);
});

// 🔹 Funciones de navegación
function siguienteEjercicio(destino) {
    window.location.href = destino;
}

function volver(destino) {
    window.location.href = destino;
}

function irInicio() {
    window.location.href = `../index.html`;
}

// 🔹 Función para redirigir según selección (para index.html)
function redirigir() {
    const radios = document.getElementsByName('opcion');
    let seleccion = null;

    for (const radio of radios) {
        if (radio.checked) {
            seleccion = radio.value;
            break;
        }
    }

    if (seleccion === 'transcripcion') {
        window.location.href = 'transcripciones/transcripcion_ejer_clase01.html';
    } else if (seleccion === 'leia') {
        window.location.href = 'leias/LEIA_ejer_clase01.html';
    } else {
        alert('Por favor selecciona una opción.');
    }
}
