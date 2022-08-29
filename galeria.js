/*=============================================
GALERIA
=============================================*/

///////////////// PROPIEDADES GALERIA

var pg = {

    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom: document.querySelector("body"),
    lightbox: null,
    modal:null,
    animacionGaleria: "fade"
}

//////////////////////// METODOS GALERIA

var mg = {

    inicioGaleria: function(){ 

        for(let i=0; i<pg.imgGaleria.length; i++){  

            pg.imgGaleria[i].addEventListener("click", mg.capturaImagen) // se crea evento click y se realiza el metodo "capturaImagen" 

        }
    },

    capturaImagen: function(img){

        pg.rutaImagen = img.target; //img.target = imagen que se esta seleccionando por inicioGaleria

        mg.lightbox(pg.rutaImagen)
    },
    
    lightbox: function(img){

        pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id","lightbox"); // en el body creamos un nuevo elemento div (cuerpoDom es una propiedad que selecciona el body) y le damos un atributo
        pg.lightbox = document.querySelector("#lightbox"); //capturo el div creado en la propiedad lightbox

        //damos estilos al div creado
        pg.lightbox.style.width = "100%";
        pg.lightbox.style.height = "100%";
        pg.lightbox.style.position = "fixed";
        pg.lightbox.style.zIndex = "10";
        pg.lightbox.style.background = "rgba(0,0,0,.8)";
        pg.lightbox.style.top = 0;
        pg.lightbox.style.lefts = 0;

        pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id","modal"); //dentro del div creado (lightbox) crea un modal donde aparecerá la foto
        pg.modal = document.querySelector("#modal"); //capturamos el div creado y lo guardamos en la propiedad modal

        pg.modal.innerHTML = img.outerHTML + "<div>x</div>"; //outerHTML trae el contenido, no el objeto.

        //estilos a la imagen del modal (pg.modal.childNodes[0])
        pg.modal.childNodes[0].style.width = "100%";
        pg.modal.childNodes[0].style.border = "5px solid white";  



        //damos estilos al modal 
        
        if(window.matchMedia("(max-width:1000px)").matches){ //si la pantalla es mas pequeña que el tamaño sea del 90%

            pg.modal.style.width = "90%";
        }else{
            pg.modal.style.width = "60%";
        };

        if(pg.animacionGaleria == "fade"){

            pg.modal.style.top = "50%";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 0;

            setTimeout(function(){
                pg.modal.style.transition = ".5s opacity ease";
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + "px"; // captura el ancho en px que tiene la imagen en esa pantalla y divide entre dos para darle los margenes
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + "px"; 

            })

        }

        pg.modal.style.display = "block";
        pg.modal.style.position = "relative";

       

        //estilos a la "X" del modal ,segundo hijo del div (pg.modal.childNodes[1])
        pg.modal.childNodes[1].style.width = "100%";
        pg.modal.childNodes[1].style.position = "absolute";
        pg.modal.childNodes[1].style.right = "5px";
        pg.modal.childNodes[1].style.top = "5px";
        pg.modal.childNodes[1].style.color = "silver";
        pg.modal.childNodes[1].style.cursor = "pointer";        
        pg.modal.childNodes[1].style.fontSize = "30px";
        pg.modal.childNodes[1].style.width = "40px";
        pg.modal.childNodes[1].style.height = "40px";
        pg.modal.childNodes[1].style.textAlign = "center";
        pg.modal.childNodes[1].style.background = "white";
        pg.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px";

        // damos funcionalidad a la X para que cierre la imagen, con un evento click y un motodo "salirGaleria"
        pg.modal.childNodes[1].addEventListener("click",mg.salirGaleria)
    },

    salirGaleria: function(){

        pg.lightbox.parentNode.removeChild(pg.lightbox); // parentNode selecciona al padre y busca un hijo de la pg.ligthboy y eliminalo
    }
}

mg.inicioGaleria();