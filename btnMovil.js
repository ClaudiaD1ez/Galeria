/*=============================================
BTN MOVIL
=============================================*/

///////////////// PROPIEDADES BTNMOVIL

let pb = {

    btnMovil: document.querySelector("#btnMovil span"),
    vistaBotones:false,
    navBtn: document.querySelector("nav"),
    boton: document.querySelectorAll("nav ul li a"),

}

//////////////////////// METODOS BRNMOVIL

let mb = {

    inicioMovil: function(){

        pb.btnMovil.addEventListener("click", mb.mostrarBtn)

        for(let i=0; i< pb.boton.length; i++){

            pb.boton[i].addEventListener("click", mb.ocultarBtn);
        }
    },

    ocultarBtn: function(){

        if(window.matchMedia("(max-width:767px)").matches){ // si la pantalla coincide con un ancho maximo de 767px

            pb.vistaBotones = false;
            pb.navBtn.className = "col-lg-6 col-md-7 col-sm-9 col-xs-0"
        }
    },

    mostrarBtn: function(){

        if(!pb.vistaBotones){

            pb.vistaBotones = true;
            pb.navBtn.className = "col-lg-6 col-md-7 col-sm-9 col-xs-12"

        }else{

            pb.vistaBotones = false;
            pb.navBtn.className = "col-lg-6 col-md-7 col-sm-9 col-xs-0"

        }
    }

}

mb.inicioMovil();