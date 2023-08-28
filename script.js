const listaContactos = [];

document.addEventListener('DOMContentLoaded', () => {
    const elementoNombre = document.getElementById('nombre');
    const elementoTelefono = document.getElementById('telefono');
    const elementoLista = document.getElementById('lista');

    function mostrarLista(lista) {
        elementoLista.innerHTML = '';
        lista.forEach((contacto, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${contacto.nombre}: ${contacto.telefono} <button class='eliminarContacto' data-index=${index}>Eliminar</button>`;
            elementoLista.appendChild(li);
        });
    }

    document.getElementById('ingresarDatos').addEventListener('submit', (e) => {
        e.preventDefault();
        const contacto = { nombre: elementoNombre.value, telefono: elementoTelefono.value };
        elementoNombre.value = '';
        elementoTelefono.value = '';
        listaContactos.push(contacto);
        mostrarLista(listaContactos.sort((a, b) => a.nombre.localeCompare(b.nombre, undefined, { sensitivity: 'base' })));
    })

    elementoLista.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminarContacto')) {
            listaContactos.splice(e.target.getAttribute('data-index'), 1);
            mostrarLista(listaContactos);
        }
    })
})