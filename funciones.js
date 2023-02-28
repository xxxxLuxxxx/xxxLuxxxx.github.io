// Boton top
    let botontop = document.getElementById("botontop");

    // Cuando el usuario baja 20px de la parte superior del documento se muestra el boton
    window.onscroll = function() {
        scrollFunction()
    }
    ;

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            botontop.style.display = "block";
        } else {
            botontop.style.display = "none";
        }
    }

    // Cuando se hace clic en el boton se va a el inicio de la pagina
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


// Barra de navegación

    //Barra de navegación responsiva     
    function myFunction() {
        var x = document.getElementById("navbar");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }


    //Fijación de barra de navegación