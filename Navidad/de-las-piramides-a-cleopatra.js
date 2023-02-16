/**
 * @author Ignacio Martínez Casas
 */

/**
 * @param {any} numA
 * @param {any} numB
 * @param {any} numC
 * @return {number}
 */

function fecha_mas_cercana(numA, numB, numC) {
    //Verificaciones
    if (isNaN(numA)) return;
    if (isNaN(numB)) return;
    if (isNaN(numC)) return;
    //if (numA > numB || numA > numC) return;
    if (numB > numC) return;
    if (numA == 0 || numB == 0 || numC == 0) return;
    if (numA < -10000 || numB < -10000 || numC < -10000) return;
    if (numC > 10000 || numB > 10000 || numA > 10000) return;

    //Operación para ver la diferencia entre las fechas
    var difA = Math.abs(numA - numB);
    var difC = Math.abs(numC - numB);

    //Verificacion para que la fecha no sea 0
    if (numA < 0 && numB > 0) difA--;
    if (numB < 0 && numC > 0) difC--;

    //Return
    if (difA == difC) {
        return 0;
    } else if (difA < difC) {
        return numA;
    } else {
        return numC;
    }
}


