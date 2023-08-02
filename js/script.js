const textoInicial = document.querySelector(".encriptador__texto");
const resultado = document.querySelector(".resultado__texto");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
function encriptar(textoEncriptado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < llavesEncriptacion.length; i++) {
        if(textoEncriptado.includes(llavesEncriptacion[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }

    return textoEncriptado;
}

function btnEncriptar() {
    const regex = new RegExp("^[a-z ]+$");

    if (regex.test(textoInicial.value)) {
        resultado.style.backgroundImage = "none";

        const textoFinal = encriptar(textoInicial.value);
        resultado.value = textoFinal;
        textoInicial.value = "";
    }
    else {
        alert("El texto no debe estar vacio, no tener letras con acentos ni caracteres especiales, solo letras minúsculas!");
    }
}


function desencriptar(textoDesencriptado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < llavesEncriptacion.length; i++) {
        if(textoDesencriptado.includes(llavesEncriptacion[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }

    return textoDesencriptado;
}

function btnDesencriptar() {
    const regex = new RegExp("^[a-z ]+$");
    
    if (regex.test(textoInicial.value)) {
        resultado.style.backgroundImage = "none";

        const textoFinal = desencriptar(textoInicial.value);
        resultado.value = textoFinal;
        textoInicial.value = "";
    }
    else {
        alert("El texto no debe estar vacio, no tener letras con acentos ni caracteres especiales, solo letras minúsculas!");
    }
}

async function btnCopiar() {
    try {
        await navigator.clipboard.writeText(resultado.value);
        alert("Texto copiado!");
    } catch (err) {
        alert("Error al copiar:", err);
    }
}