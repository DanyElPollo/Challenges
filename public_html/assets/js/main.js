$(document).ready(function () {

    $(".valido").on("click", function () {
        let opcion = $(this).attr("value");
        validarCampo(opcion, $("#enc-des").val());
    });

});

function validarCampo(opcion, texto) {
    if (texto == "") {
        Swal.fire({
            icon: "warning",
            title: "Campo Vacío",
            text: "No se encontro frace para encriptar/desencriptar.",
        });
    } else {
        envioDatos(opcion, texto)
            .then((respuesta) => {
                $("#mano").removeClass("d-flex").addClass("d-none");
                $("#parrafo").text(respuesta).removeClass("d-none");
            })
            .catch((respuesta) => {
                console.error(respuesta);
                Swal.fire({
                    icon: "error",
                    title: "Ocurrió un error",
                    text: "No se pudo procesar la solicitud. Intente de nuevo más tarde.",
                });
                $("#mano").removeClass("d-none").addClass("d-flex");
                $("#parrafo").addClass("d-none");
            });
    }
}

function envioDatos(opcion, texto) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/mi-back",
            data: JSON.stringify({ opcion: opcion, texto: texto }),
            dataType: "json",
            beforeSend: function () {
                Swal.showLoading();
            },
            success: function (response) {
                setTimeout(function () {
                    Swal.close();
                    resolve(response.text);
                }, 1000);
            },
            error: function (xhr, status, error) {
                reject(error);
            }
        });
    });
}