/*!
 * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict
    // Redireccionamiento de idiomas
    if (location.href === "http://cvjuangracialahoz.atwebpages.com/") {
        $("#es-flag").attr("href", "");
        $("#en-flag").attr("href", "http://cvjuangracialahoz.atwebpages.com/index-eng.html");

        $("#es-flag").click(function(e) {
            e.preventDefault();
        });
    }

    if (location.href === "http://cvjuangracialahoz.atwebpages.com/index-eng.html") {
        $("#en-flag").attr("href", "");
        $("#es-flag").attr("href", "http://cvjuangracialahoz.atwebpages.com/");

        $("#en-flag").click(function(e) {
            e.preventDefault();
        });
    }

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });



    $(document).ready(function() {
        scroll();
        width();
    });

    $(document).on("scroll", function() {
        scroll();
        width();
    });

    function width() {
        if ($(window).width() < 730) {
            $("div[name='separador']").css("display", "block");
            $("div[name='ico-exp']").addClass("col-12").removeClass("col-2");
            $("h4[name='subtlt-exp'").addClass("mb-5").removeClass("mb-3");
            $("div[name='descp-exp']").addClass("col-12 text-center").removeClass("col-10 text-justify");
            $('#txt-personal').removeClass('w-40 ml-5');
            $('#txt-personal').addClass('w-75 container align-items-center');
            $("#personal").css("background-image", "none");
            $("#personal").css("background-color", "black");
        } else {
            $("div[name='separador']").css("display", "none");
            $("div[name='ico-exp']").addClass("col-2").removeClass("col-12");
            $("h4[name='subtlt-exp'").addClass("mb-3").removeClass("mb-5");
            $("div[name='descp-exp']").addClass("col-10 text-justify").removeClass("col-12 text-center");
            $('#txt-personal').addClass('w-40 ml-5');
            $('#txt-personal').removeClass('w-75 container align-items-center');
            $("#personal").css("background-image", "url(assets/img/perfil2.jpg)");
            $("#personal").css("background-color", "none");
        }
    }

    function scroll() {
        //sacamos el desplazamiento actual de la página
        var desplazamientoActual = $(document).scrollTop();
        //compruebo si debo mostrar el texto de la sección "personal" u ocultarlo
        var posicionTxtPersonal = $("#txt-personal").offset().top - 500;
        if (desplazamientoActual > posicionTxtPersonal && !$("#txt-personal").hasClass("fadeInLeft")) {
            $("#txt-personal").addClass("animated fadeInLeft slow");
            $("#txt-personal").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionTxtPersonal && $("#txt-personal").hasClass("fadeInLeft")) {
            $("#txt-personal").removeClass("fadeInLeft");
            $("#txt-personal").addClass("fadeOut");
        }

        //compruebo si debo mostrar el texto de la sección "educacion" u ocultarlo
        var posicionTxtEducacion = $("#txt-educacion").offset().top - 500;
        if (desplazamientoActual > posicionTxtEducacion && !$("#txt-educacion").hasClass("fadeIn")) {
            $("#txt-educacion").addClass("animated fadeIn slow");
            $("#txt-educacion").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionTxtEducacion && $("#txt-educacion").hasClass("fadeIn")) {
            $("#txt-educacion").removeClass("fadeIn");
            $("#txt-educacion").addClass("fadeOut");
        }

        //compruebo si debo mostrar el texto de la sección "experiencia" u ocultarlo
        var posicionTxtExperiencia = $("#txt-experiencia").offset().top - 500;
        if (desplazamientoActual > posicionTxtExperiencia && !$("#txt-experiencia").hasClass("fadeIn")) {
            $("#txt-experiencia").addClass("animated fadeIn slow");
            $("#txt-experiencia").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionTxtExperiencia && $("#txt-experiencia").hasClass("fadeIn")) {
            $("#txt-experiencia").removeClass("fadeIn");
            $("#txt-experiencia").addClass("fadeOut");
        }

        //compruebo si debo mostrar el texto de la sección "conocimientos" u ocultarlo
        var posicionTxtConocimientos = $("#txt-conocimientos").offset().top - 500;
        if (desplazamientoActual > posicionTxtConocimientos && !$("#txt-conocimientos").hasClass("fadeIn")) {
            $("#txt-conocimientos").addClass("animated fadeIn slow");
            $("#txt-conocimientos").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionTxtConocimientos && $("#txt-conocimientos").hasClass("fadeIn")) {
            $("#txt-conocimientos").removeClass("fadeIn");
            $("#txt-conocimientos").addClass("fadeOut");
        }

        //compruebo si debo mostrar el texto de la sección "idiomas" u ocultarlo
        var posicionTxtIdiomas = $("#txt-idiomas").offset().top - 550;
        if (desplazamientoActual > posicionTxtIdiomas && !$("#txt-idiomas").hasClass("fadeIn")) {
            $("#txt-idiomas").addClass("animated fadeIn slow");
            $("#txt-idiomas").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionTxtIdiomas && $("#txt-idiomas").hasClass("fadeIn")) {
            $("#txt-idiomas").removeClass("fadeIn");
            $("#txt-idiomas").addClass("fadeOut");
        }

        //compruebo si debo mostrar el texto de la sección "competencias y habilidades" u ocultarlo
        var posicionTxtComyhab = $("#txt-compyhab").offset().top - 550;
        if (desplazamientoActual > posicionTxtComyhab && !$("#txt-compyhab").hasClass("fadeIn")) {
            $("#txt-compyhab").addClass("animated fadeIn slow");
            $("#txt-compyhab").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionTxtComyhab && $("#txt-compyhab").hasClass("fadeIn")) {
            $("#txt-compyhab").removeClass("fadeIn");
            $("#txt-compyhab").addClass("fadeOut");
        }

        //compruebo si debo mostrar el texto de la sección "otros intereses" u ocultarlo
        var posicionTxtOtros = $("#txt-otros").offset().top - 500;
        if (desplazamientoActual > posicionTxtOtros && !$("#txt-otros").hasClass("fadeIn")) {
            $("#txt-otros").addClass("animated fadeIn slow");
            $("#txt-otros").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionTxtOtros && $("#txt-otros").hasClass("fadeIn")) {
            $("#txt-otros").removeClass("fadeIn");
            $("#txt-otros").addClass("fadeOut");
        }

        //compruebo si debo mostrar el texto de la sección "contacto" u ocultarlo
        var posicionContacto = $("#contacto").offset().top - 700;
        if (desplazamientoActual > posicionContacto && !$("#contacto").hasClass("fadeIn")) {
            $("#contacto").addClass("animated fadeIn slow");
            $("#contacto").removeClass("fadeOut");
        } else if (desplazamientoActual < posicionContacto && $("#contacto").hasClass("fadeIn")) {
            $("#contacto").removeClass("fadeIn");
            $("#contacto").addClass("fadeOut");
        }


    }

})(jQuery); // End of use strict