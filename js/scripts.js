let buscador = document.getElementById("search");
buscador.addEventListener("keyup", function() {
    let cont = 0;
    let searchTerm = new RegExp(buscador.value, 'gi'); // búsqueda insensible a mayúsculas y minúsculas
    
    Array.from(document.getElementsByTagName("p")).forEach(elemen => {
        const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
        
        if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
            const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
            elemen.innerHTML = htmlNuevo;
            cont = cont + 1;
        } else {
            elemen.innerHTML = htmlOriginal;
        }
    });
    Array.from(document.getElementsByTagName("h5")).forEach(elemen => {
        const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
        
        if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
            const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
            elemen.innerHTML = htmlNuevo;
            cont = cont + 1;
        } else {
            elemen.innerHTML = htmlOriginal;
        }
    });
    Array.from(document.getElementsByTagName("h2")).forEach(elemen => {
        const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
        
        if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
            const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
            elemen.innerHTML = htmlNuevo;
            cont = cont + 1;
        } else {
            elemen.innerHTML = htmlOriginal;
        }
    });
});
