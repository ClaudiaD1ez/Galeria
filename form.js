/*=============================================
FORM
=============================================*/

///////////////// PROPIEDADES FORM

let pf = {
    entradas: document.querySelectorAll("input.validar"), // solo los input con la clase "validar"
    expresionRegular: null,
    validarUsuario: false,
    validarPassword: false,
    validarEmail: false,
    validarTerminos: null

}

//////////////////////// METODOS FORM

let mf = {

    inicioFormulario: function(){

        for(let i=0; i< pf.entradas.length; i++){

            pf.entradas[i].addEventListener("focus", mf.enFoco); // evento focus que lance el metodo enFoco
            pf.entradas[i].addEventListener("blur", mf.sinFoco); // evento blur cuando pierde el foco
            pf.entradas[i].addEventListener("change", mf.cambioEntrada); // evento change

        }
    },

    enFoco: function(input){

        pf.valor = input.target.value;

        if(pf.valor == ""){

            document.querySelector("#" + input.target.id).style.background = "rgba(225,225,0,.3)";
            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;
        }

        document.querySelector("[for="+input.target.id+"]").appendChild(document.createElement("div")).setAttribute("class","error")
    },

    sinFoco: function(input){

        document.querySelector("#" + input.target.id).style.background = "white";
        document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 0; 

    },

    cambioEntrada(input){

        pf.valor = input.target.value;

        if(pf.valor != ""){

            switch(input.target.id){

                case "nombre":

                    if(pf.valor.length < 2 || pf.valor.length > 6){

                        document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+ input.target.placeholder + '</span>'

                        pf.validarUsuario = false;

                    }else{

                        document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error")) // parentNode para actuar sobre el padre del que estamos seleccionando

                        pf.validarUsuario = true;

                    }

                break;

                case "password":

                    pf.expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/; // Buscar en RegExLib para Expresiones Regulares

					if(!pf.expresionRegular.test(pf.valor)){ // si no se cumple la expresionregular despues de hacer un test dentro del valor del target del input

						document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+input.target.placeholder+'</span>'; // repetimos error de nombre

						pf.validarPassword = false;

					}else{

						document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error")) // repetimos borrar error

						pf.validarPassword = true;
					}

                break;

                case "email":

                    pf.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;; 

					if(!pf.expresionRegular.test(pf.valor)){ // si no se cumple la expresionregular despues de hacer un test dentro del valor del target del input

						document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+input.target.placeholder+'</span>'; // repetimos error de nombre

                        pf.validarEmail = false;

					}else{

						document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error")) // repetimos borrar error

                        pf.validarEmail = true;
					}

                break;
            }
        }else{ // si pf.valor == ""

            document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error")) // repetimos borrar error

        }

    },

    validarFormulario: function(){

        pf.validarTerminos = document.querySelector("#terminos").checked; // comprobar si la casilla terminos esta chekeada

        if(!pf.validarUsuario || !pf.validarPassword || !pf.validarEmail){ 

            document.querySelector("#labelEnviar").innerHTML = '<span style = "color:red">*hay errores en los datos ¡Revisar de nuevo!</span>'

            return false; //no se envia porque en el html especificamos que retorne verdadero --> onsubmit="return mf.validarFormulario()" 

        }else if(!pf.validarTerminos){

            document.querySelector("#labelEnviar").innerHTML = '<span style = "color:red">*Acepte terminos y condiciones</span>'

            return false;
        }else{

            return true;
        }
    }
}


mf.inicioFormulario();