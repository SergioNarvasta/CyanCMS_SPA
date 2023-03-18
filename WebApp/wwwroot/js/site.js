//Evalua parametros y redirige

window.addEventListener('load', function () {
            redirectBoletin();
        });
        
        function redirectBoletin() {
            var error = $('#msg_error').data('error');
            if (error == 1) {
                console.log("se detecto error");

                const url = window.location.search;
                const urlParams = new URLSearchParams(url);

                if (urlParams.has('boletin') == true) {
                    console.log("Existe param boletin");
                    if (urlParams.has('pagina') == false) {
                        console.log("No Existe param pagina");
                        var redirect = url + "&pagina=1";
                        console.log("redirigiendo a :"+redirect);
                        window.location.href = redirect;
                    }
                }

            } else {
                console.log("No capturo error");
            }
        }
