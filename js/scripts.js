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
        console.error(`❌ No se pudo cargar el fragmento: ${error.message}`);
    }
}

// 🔹 Detectar ruta base dinámica (funciona en GitHub Pages y localmente)
function obtenerRutaBase() {
    const path = window.location.pathname;
    const repo = "ExperimentoGPS2025"; // nombre exacto del repositorio

    // Divide la ruta en partes
    const partes = path.split("/").filter(Boolean); // elimina vacíos

    // Busca si el repositorio está en la ruta (en GitHub Pages)
    const indiceRepo = partes.indexOf(repo);
    let profundidad = 0;

    if (indiceRepo !== -1) {
        // cuántas carpetas hay dentro del repo después del nombre
        profundidad = partes.length - indiceRepo - 1;
    } else {
        // si no está (por ejemplo, corriendo localmente)
        profundidad = partes.length - 1;
    }

    // construye la ruta base correcta
    return "../".repeat(profundidad);
}

// 🔹 Cargar header y footer cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const base = obtenerRutaBase();
    cargarFragmento("header-placeholder", `${base}componentes/header.html`);
    cargarFragmento("footer-placeholder", `${base}componentes/footer.html`);
});

// 🔹 Funciones de navegación
function siguienteEjercicio(destino) {
    window.location.href = destino;
}

function volver(destino) {
    window.location.href = destino;
}

function irInicio() {
    const base = obtenerRutaBase();
    window.location.href = `${base}index.html`;
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
