/**
 * @author Ignacio Martínez Casas
 */

/**
  * @param {number} numero 
 * @returns {string}
 */
function numeros_jeroglificos(numero) {
    let texto = "";

    while (numero >= 1000000) {
        texto += "H";
        numero -= 1000000;
    }
    while (numero >= 100000) {
        texto += "R";
        numero -= 100000;
    }
    while (numero >= 10000) {
        texto += "D";
        numero -= 10000;
    }
    while (numero >= 1000) {
        texto += "F";
        numero -= 1000;
    }
    while (numero >= 100) {
        texto += "C";
        numero -= 100;
    }
    while (numero >= 10) {
        texto += "G";
        numero -= 10;
    }
    while (numero >= 1) {
        texto += "T";
        numero -= 1;
    }

    return texto;
}