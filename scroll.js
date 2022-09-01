/*=============================================
SCROLL
=============================================*/

///////////////// PROPIEDADES SCROLL

let ps = {

    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    botones: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destinoScroll: 0
}

//////////////////////// METODOS SCROLL

let ms = {

    inicioScroll: function(){

        document.addEventListener("scroll", ms.efectoParallax);

        for(let i=0; i<ps.botones.length; i++){

            ps.botones[i].addEventListener("click", ms.desplazamiento)
        }
    },

    efectoParallax: function(){

        ps.posicionScroll = window.pageYOffset //propiedad del obj window pageYOffset captura la posicion del scroll, si esta al prinicipio dera 0

        if(ps.posicionScroll > ps.cajaScroll.offsetTop){ // si la posicion del escrol es superior al el limite superior del div scroll

           for(let i=0; i< ps.articulos.length; i++){
           
              ps.articulos[i].style.marginLeft = "0%";  // todos los articulos se pegan a la izq.

           }

        }else{

            for(let i=0; i < ps.articulos.length; i++){

                ps.articulos[i].style.marginLeft = ps.posicionScroll/15 - 100 +  "%"
            }
        }
    },

    desplazamiento: function(ruta){

        ruta.preventDefault(); //prevenir eventos po rdefecto

        ps.ruta = ruta.target.getAttribute("href");

        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop;

        ps.intervalo = setInterval(function(){

            if(ps.posicionScroll < ps.destinoScroll){ //si el scroll esta encima del punto al que quiero llegar

                ps.posicionScroll+= 100; // la posición del scroll se va incrementado de a 100 unidades
            }

            if(ps.posicionScroll >= ps.destinoScroll){

                ps.posicionScroll = ps.destinoScroll; // si no, que tome el destino valor de la posicion de destino

                clearInterval(ps.intervalo) // detener intervalo
            }

            window.scrollTo(0,ps.posicionScroll) // los parametros son la posicion vertical y horizantal

        })

    }
}

ms.inicioScroll();