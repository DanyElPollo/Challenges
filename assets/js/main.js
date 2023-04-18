$(document).ready(function () {
    
    $(".valido").on("click",  ()=>{
        validarCampo($("#enc-des").val());
    });

});

function validarCampo(texto){
        if(texto == ""){
            swal.fire({
                icon: "warning",
                title: "Campo Vacío",
                text: "No se encontro frace para encriptar/desencriptar.",
            });
        }else{
            $.ajax({
                type: "method",
                url: "url",
                data: "data",
                dataType: "dataType",
                success: function (response) {
                    
                }
            });
        }
}