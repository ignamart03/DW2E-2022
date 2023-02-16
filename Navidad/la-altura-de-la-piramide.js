/**
 * @author Ignacio Martínez Casas
 */

var bloques = 0;
var huecos = 0;

/**
 * @param {number} bloques
 * @param {number} huecos
 * @returns {number}
 */
function altura_maxima_piramide(bloques, huecos) {
    //Declaracion de variables necesarias para la funcion
    var altura = 0;
    huecos = huecos / 100;
    if (huecos == 0) huecos++;
    //varaible dimensiones maximas para el bucle for
    var dimensiones_maxima = Math.floor(Math.sqrt(bloques));

    //Bucle for que tiene como fin subir la altura y reducir el numero de bloques.
    for (var i = 1; i <= dimensiones_maxima + 1; i++) {
        while (bloques >= (i * i) * huecos) {
            altura++;
            bloques -= Math.floor((i * i) * huecos);
            break;
        }
        i++;
    }

    //Devolvemos la altura
    return altura;
}

function crear_resultado() {
    
    var p = document.createElement("p");
    p.append(altura_maxima_piramide(5, 0));
    document.body.append(p);
}

