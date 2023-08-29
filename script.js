document.addEventListener('DOMContentLoaded', () => {
    const elementoNombre = document.getElementById('nombre');
    const elementoTelefono = document.getElementById('telefono');
    const elementoLista = document.getElementById('lista');

    const listaContactos = [];

    function insertarOrdenado(contacto) {
        let inf = 0;
        let sup = listaContactos.length - 1;
        while (inf <= sup) {
            let med = (inf + sup) >>> 1;
            if (listaContactos[med].nombre.localeCompare(contacto.nombre, undefined, { sensitivity: 'base' }) < 0)
                inf = med + 1;
            else
                sup = med - 1;
        }
        listaContactos.splice(inf, 0, contacto);
        const li = document.createElement('li');
        li.innerHTML = `${contacto.nombre}: ${contacto.telefono} <button class='eliminarContacto' data-index=${inf}>Eliminar</button>`;
        elementoLista.insertBefore(li, elementoLista.children[inf]);
    }

    document.getElementById('ingresarDatos').addEventListener('submit', (e) => {
        e.preventDefault();
        const contacto = { nombre: elementoNombre.value, telefono: elementoTelefono.value };
        elementoNombre.value = '';
        elementoTelefono.value = '';
        insertarOrdenado(contacto);
    })

    elementoLista.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminarContacto')) {
            listaContactos.splice(e.target.getAttribute('data-index'), 1);
            e.target.parentElement.remove();
        }
    })
})