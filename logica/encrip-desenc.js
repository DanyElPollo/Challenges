async function manejoTexto(opcion, texto) {
    const tildes = [["á", "a"], ["é", "e"], ["í", "i"], ["ó", "o"], ["ú", "u"]];
    const vocales = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];

    if (opcion == "e") {
        for (let i = 0; i < vocales.length; i++) {
            if(texto.includes(tildes[i][0])){
                texto = texto.replaceAll(tildes[i][0], tildes[i][1]);
            }
            if (texto.includes(vocales[i][0])) {
                texto = texto.replaceAll(vocales[i][0], vocales[i][1]);
            }
        }
    } else {
        for (let i = 0; i < vocales.length; i++) {
            if (texto.includes(vocales[i][1])) {
                texto = texto.replaceAll(vocales[i][1], vocales[i][0]);
            }
        }
    }

    return Promise.resolve(texto);
}
module.exports = manejoTexto;