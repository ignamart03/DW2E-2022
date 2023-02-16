/**
 * @author Ignacio Martínez Casas
 */

function crear_tabla() {

    numA = document.getElementById("num1").value;
    numB = document.getElementById("num2").value;
    numC = document.getElementById("num3").value;

    numA = Number(numA);
    numB = Number(numB);
    numC = Number(numC);

    document.getElementById("div_tabla").style = "";

    //Creamos los elementos
    var tabla = document.getElementById("tabla_cleo");
    var cuerpo = document.createElement("tbody");
    var tr_cuerpo = document.createElement("tr");
    var td_cuerpo1 = document.createElement("td");
    td_cuerpo1.innerHTML = document.getElementById("num1").value;
    var td_cuerpo2 = document.createElement("td");
    td_cuerpo2.innerHTML = document.getElementById("num2").value;
    var td_cuerpo3 = document.createElement("td");
    td_cuerpo3.innerHTML = document.getElementById("num3").value;
    var td_cuerpo4 = document.createElement("td");
    td_cuerpo4.innerHTML = fecha_mas_cercana(numA, numB, numC);

    //Añadimos las columnas del cuerpo
    tr_cuerpo.append(td_cuerpo1);
    tr_cuerpo.append(td_cuerpo2);
    tr_cuerpo.append(td_cuerpo3);
    tr_cuerpo.append(td_cuerpo4);

    //Añadimos la etiqueta <tr> al cuerpo
    cuerpo.append(tr_cuerpo);

    //Añadimos el cuerpo a la tabla
    tabla.append(cuerpo);

    //Añadimos la tabla
    document.getElementById("div_tabla").append(tabla);
}


