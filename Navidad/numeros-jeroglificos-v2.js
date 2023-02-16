/**
 * @author Ignacio Martínez Casas
 */

/**
 * @param {number} numero 
 * @returns {{numero: number, simbolico: string, jeroglifico: string}}
 */
function numeros_jeroglificos_v2(numero) {
    let numero2 = numero;
    let simbolicos = numero + "";
    let jeroglico_texto = "";

    while (numero2 >= 1000000) {
        jeroglico_texto += "𓁨";
        numero2 -= 1000000;
    }
    while (numero2 >= 100000) {
        jeroglico_texto += "𓆐";
        numero2 -= 100000;
    }
    while (numero2 >= 10000) {
        jeroglico_texto += "𓂭";
        numero2 -= 10000;
    }
    while (numero2 >= 1000) {
        jeroglico_texto += "𓆼";
        numero2 -= 1000;
    }
    while (numero2 >= 100) {
        jeroglico_texto += "𓍢";
        numero2 -= 100;
    }
    while (numero2 >= 10) {
        jeroglico_texto += "𓎆";
        numero2 -= 10;
    }
    while (numero2 >= 1) {
        jeroglico_texto += "𓏤";
        numero2 -= 1;
    }

    return {
        numero: numero,
        simbolico: simbolicos,
        jeroglifico: jeroglico_texto,
    };


}