/* Tu peso en Marte

//Obtener datos del usuario
        var usuario  = prompt("¿Cuál es tu peso?");

        var peso = parseFloat(usuario);
 
        //Las gravedades en diferentes planetas
        var g_tierra = 9.8;
        var g_marte = 3.7;
        var g_jupiter = 24.8;
   
        var peso_final;
        peso_final = (peso*g_marte)/g_tierra;
        peso_final = (peso_final);
        document.write("Tu peso en Marte es <strong>" + peso_final + " kilos </strong>");
 
*/


//Obtener datos del usuario
var usuario  = prompt("¿Cuál es tu peso?");

var planeta = parseInt(prompt("Elige tu planeta\n1 es Marte, 2 es Júpiter"))

var peso = parseFloat(usuario);

//Las gravedades en diferentes planetas
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;

var peso_final;
var nombre;

if (planeta ==1) {
        peso_final = (peso * g_marte)/g_tierra;
        nombre = "Marte";
    }
    else if(planeta==2){
        peso_final = (peso * g_jupiter)/g_tierra
        nombre = "Júpiter";

    }
    else{
        peso_final = ("xxxx");
        nombre = "NINGUNO";
    }

peso_final = (peso_final);
document.write("Tu peso en " + nombre + " es <strong>" + peso_final + " kilos </strong>");
        