/*=============================================
SCROLL
=============================================*/

///////////////// PROPIEDADES SCROLL

let ps = {

    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
}

//////////////////////// METODOS SCROLL

let ms = {

    inicioScroll: function(){

        document.addEventListener("scroll", ms.efectoParallax)
    },

    efectoParallax: function(){

        ps.posicionScroll = window.pageYOffset //propiedad del obj window pageYOffset captura la posicion del scroll, si esta al prinicipio dera 0

        if(ps.posicionScroll > ps.cajaScroll.offsetTop){ // si la posicion del escrol es superior al el limite superior del div scroll

           for(let i=0; i< ps.articulos.length; i++){
           
              ps.articulos[i].style.marginLeft = "0%";  // todos los articulos se pegan a la izq

           }

        }else{

            for(let i=0; i < ps.articulos.length; i++){

                ps.articulos[i].style.marginLeft = ps.posicionScroll/15 - 100 +  "%"
            }
        }
    }
}

ms.inicioScroll();