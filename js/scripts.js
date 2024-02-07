let buscador = document.getElementById("search");
buscador.addEventListener("keyup", function() {
    let cont = 0;
    let searchTerm = new RegExp(buscador.value, 'gi'); // búsqueda insensible a mayúsculas y minúsculas
    
    Array.from(document.getElementsByTagName("p")).forEach(elemen => {
        const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
        
        if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
            // Realizar la sustitución del texto con la clase CSS
            const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
            elemen.innerHTML = htmlNuevo;
            cont = cont + 1;
        } else {
            elemen.innerHTML = htmlOriginal;
        }
    });
});
