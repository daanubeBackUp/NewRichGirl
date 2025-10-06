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

// setInterval(function() {
//     window.location.reload();
// }, 60000); // Recarga la página cada 60 segundos

window.onload = () => {
        let sorteosTriple = [
        {
            hour: "09:05am",
            number: 132
        },
        {
            hour: "10:05am",
            number: 645
        },
        {
            hour: "11:05am",
            number: 688
        },
        {
            hour: "12:05pm",
            number: 974
        },
        {
            hour: "01:05pm",
            number: 389
        },
        {
            hour: "02:05pm",
            number: 490
        },
        {
            hour: "03:05pm",
            number: 956
        },
        {
            hour: "04:05pm",
            number: 386
        },
        {
            hour: "05:05pm",
            number: 285
        },
        {
            hour: "06:05pm",
            number: 285
        },
        {
            hour: "07:05pm",
            number: 289
        },
        {
            hour: "08:05pm",
            number: 368
        }                
    ];

    var arrayTriple = [];
    for (let i = 0; i < sorteosTriple.length; i++) {
        const element = sorteosTriple[i];
        arrayTriple.push(
            "<article class='tripleResultArticle'>" +
                "<h1>"+ element.hour +"</h1>" +
                "<p>"+ (parseInt(element.number.toString().substring(1,3))-1) +"</p>" +
                "<p>"+ element.number.toString() +"</p>" +
                "<p>"+ (parseInt(element.number.toString().substring(1,3))+1) +"</p>" +
            "</article>"
        );
    }
    $(".tripleModeSection").append(arrayTriple);

    var arrayAnimalitos = [];
    let sorteosAnimalitos = [
        {
            hour: "09:00am",
            url: "../images/noResult.webp"
        },
        {
            hour: "10:00am",
            url: "../images/noResult.webp"
        },
        {
            hour: "11:00am",
            url: "../images/noResult.webp"
        },
        {
            hour: "12:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "01:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "02:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "03:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "04:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "05:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "06:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "07:00pm",
            url: "../images/noResult.webp"
        },
        {
            hour: "08:10pm",
            url: "../images/noResult.webp"
        }                
    ];

    for (let i = 0; i < sorteosAnimalitos.length; i++) {
        const element = sorteosAnimalitos[i];
        arrayAnimalitos.push(
            "<article class='animalsResultArticle'>" +
                "<h1>"+ element.hour +"</h1>" +
                "<img src='"+ element.url +"' />" +
            "</article>"
        );
    }
    $(".animalsModeSection").append(arrayAnimalitos);
}
        