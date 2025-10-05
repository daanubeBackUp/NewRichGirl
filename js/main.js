Swal.fire({
                title: "¡Importante!",
                text: "Este es un sitio web de resultados de apuestas, debe ser mayor de edad para poder entrar.",
                imageUrl: "images/logos/LogoLagra.webp",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "La Granjita",
                confirmButtonText: "Confirmo, tengo +18 años",
                showCloseButton: false,
                allowEscapeKey: false,
                allowOutsideClick: false
            });

            $('#lotterydate').datepicker({
                language: 'es-ES',
                autoclose: true,
                endDate: new Date().toLocaleString(),
                todayHighlight: true,
                todayBtn: "linked"
            });
            $('#lotterydate').datepicker("setDate", new Date().toLocaleString());
            $('#lotterydate').datepicker()
                .on('changeDate', function(e) {
                    Swal.fire({
                        title: "¡Fecha!",
                        text: e.date.toLocaleString(),
                        confirmButtonText: "Ok"
                    });
            });

            window.onscroll = () => {
                if(pageYOffset  >= 1000){
                    document.getElementById('goUp').style.visibility="visible"
                } else {
                    document.getElementById('goUp').style.visibility="hidden";
                }
            };
        