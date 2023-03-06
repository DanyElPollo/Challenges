/*::::: Variable constante para la encriptacion :::::*/
        const vocales = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];

        /*::::: Funcion para enviar datos a consola. :::::*/
        function consola(x) {
            console.log(x);
        }

        /*::::: Funcion para enviar texto al cuadro de mostrar :::::*/
        function mostrarText(x) {
            document.getElementById("campoEncDes").value = x;
        }

        /*::::: Funcion para encriptar texto :::::*/
        function encriptar() {
            let text = document.getElementById("encr/desc").value;
            esconder(text);
            for (let i = 0; i < vocales.length; i++) {
                if (text.includes(vocales[i][0])) {
                    text = text.replaceAll(vocales[i][0], vocales[i][1]);
                }
            }
            mostrarText(text);
        }

        /*::::: Funcion para desencriptar texto :::::*/
        function desencriptar() {
            let text = document.getElementById("encr/desc").value;
            esconder(text);
            for (let i = 0; i < vocales.length; i++) {
                if (text.includes(vocales[i][1])) {
                    text = text.replaceAll(vocales[i][1], vocales[i][0]);
                }
            }
            mostrarText(text);
        }

        /*::::: Funcion para esconder imagenes :::::*/
        function esconder(text) {
            if (text != "") {
                document.getElementById("obj").style.visibility = "hidden";
                document.getElementById("campoEncDes").style.visibility =
                    "visible";
                document.getElementById("copi").style.display = "block";
            } else {
                document.getElementById("obj").style.visibility = "visible";
                document.getElementById("campoEncDes").style.visibility =
                    "hidden";
                document.getElementById("copi").style.display = "none";
            }
        }

        /*::::: Funcion para copiar texto encriptado :::::*/
        function copiar() {
            document.getElementById("campoEncDes").focus();
            document.execCommand("selectAll");
            document.execCommand("copy");
        }