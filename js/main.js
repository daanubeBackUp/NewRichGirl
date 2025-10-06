// Verificar si el usuario ya ha confirmado la edad.
if (localStorage.getItem('ageVerified') !== 'true') {
    // Swal.fire({
    //     title: "¡Importante!",
    //     html: `
    //         <img src="/images/logos/logoLaRicachona.webp" alt="La Granjita" style="width: 180px; height: 180px; margin-bottom: 15px;">
    //         <p>Este es un sitio web de resultados de apuestas, debe ser mayor de edad para poder entrar.</p>
    //     `,
    //     confirmButtonText: "Confirmo, tengo +18 años",
    //     showCloseButton: false,
    //     allowEscapeKey: false,
    //     allowOutsideClick: false,
    //     customClass: {
    //         confirmButton: 'btn btn-success' // Clase de Bootstrap para el botón
    //     },
    //     buttonsStyling: false
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         // Guardar la confirmación en el almacenamiento local.
    //         localStorage.setItem('ageVerified', 'true');
    //     }
    // });
}

date.max = new Date().toISOString().split("T")[0];
document.getElementById('date').valueAsDate = new Date();

window.onscroll = () => {
    if(pageYOffset  >= 1000){
        document.getElementById('goUp').style.visibility="visible"
    } else {
        document.getElementById('goUp').style.visibility="hidden";
    }
};
        