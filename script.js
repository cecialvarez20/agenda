document.addEventListener("DOMContentLoaded", () => {

    const elementoNombre = document.getElementById("nombre");
    const elementoTelefono = document.getElementById("telefono");
    const elementoLista = document.getElementById("lista");
    const listaContactos = [];
    
    function mostrarLista(lista){
        elementoLista.innerHTML = "";
        lista.forEach(contacto => {
            const li = document.createElement("li");
            li.innerHTML = `${contacto.nombre}: ${contacto.telefono} <button id="eliminarContacto">Eliminar</button>`;
            elementoLista.appendChild(li);
        });
    }

    document.getElementById("ingresarDatos").addEventListener("submit", (e) => {
        e.preventDefault();
        const contacto = {nombre: elementoNombre.value, telefono: elementoTelefono.value};
        elementoNombre.value = "";
        elementoTelefono.value = "";
        listaContactos.push(contacto);
        mostrarLista(listaContactos);
       
        document.getElementById("eliminarContacto").addEventListener("click", (e) => {
            //Array.from(e.target.parentNode.children).indexOf(e.target);
            console.log(Array.from(e.target.parentNode.children).indexOf(e.target));
        })
    })
})




