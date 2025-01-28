
/*Completa el resto de esta función para que cree una tabla, con las cabeceras y los datos del JSON*/
function crearTabla(responseText){
    const datosTabla = JSON.parse(responseText);
}

function leerJSON(){
    peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200)
                crearTabla(this.responseText);
            else
                document.querySelector('div').innerHTML = "Error al acceder al fichero";
        }
    };
    peticion.open("GET", /*AQUÍ INDICO EL NOMBRE DEL ARCHIVO JSON, INCLUIDA LA EXTENSIÓN. OBVIAMENTE, no lo vamos a indicar "Hard Coded"*/ , true);
    peticion.send();
}
