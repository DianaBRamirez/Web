let buscador = document.getElementById("search");

buscador.addEventListener("keyup", function() {
    let cont = 0;

    Array.from(document.getElementsByTagName("p")).forEach(elemen => {
        const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;

        if (elemen.innerText.includes(buscador.value) && buscador.value !== '') {
            const htmlNuevo = htmlOriginal.replaceAll(buscador.value, '<span style="background-color: yellow;">'+buscador.value+'</span>');
            elemen.innerHTML = htmlNuevo;
            cont = cont + 1;
        } else {
            // Restaurar el texto original si el valor del buscador está vacío
            elemen.innerHTML = htmlOriginal;
        }
    });
});


