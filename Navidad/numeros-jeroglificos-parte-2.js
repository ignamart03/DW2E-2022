/**
 * @author Ignacio Martínez Casas
 */

function crear_tabla_jero() {
    numero = document.getElementById("numero_dado").value;

    numero = Number(numero);

    document.getElementById("div2").style = "";

    //Creamos los elementos
    var tabla = document.getElementById("tabla_jero");
    var cuerpo = document.createElement("tbody");
    var tr_cuerpo = document.createElement("tr");
    var td_cuerpo1 = document.createElement("td");
    td_cuerpo1.innerHTML = document.getElementById("numero_dado").value;
    var td_cuerpo2 = document.createElement("td");
    td_cuerpo2.innerHTML = numeros_jeroglificos(numero);
    var td_cuerpo3 = document.createElement("td");
    td_cuerpo3.innerHTML = numeros_jeroglificos_v2(numero).jeroglifico;
    td_cuerpo3.classList.add("jeroglifico");

    //Añadimos las columnas del cuerpo
    tr_cuerpo.append(td_cuerpo1);
    tr_cuerpo.append(td_cuerpo2);
    tr_cuerpo.append(td_cuerpo3);

    //Añadimos la etiqueta <tr> al cuerpo
    cuerpo.prepend(tr_cuerpo);

    //Añadimos el cuerpo a la tabla
    tabla.prepend(cuerpo);

    //Añadimos la tabla
    document.getElementById("div2").prepend(tabla);
}
