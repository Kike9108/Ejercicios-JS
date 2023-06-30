// EJERCICIO 1
/* Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”. */

function bellisimo(input) {
    if(input === "si") {
        return(`Ciertamente`)
    } else if (input === "no") {
        return(`No te creo`)}
    
}

function Ejercicio1() {
    let valorIngresado = document.getElementById("inputEjercicio1").value.toLowerCase();
    let resultado = bellisimo(valorIngresado);
    let resultado1 = document.getElementById("Resultado1");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

// EJERCICIO 2
/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.*/

function divisibleEntreDos(num) {
    if (parseFloat(num) % 2 === 0) {
        return("Se puede dividir entre 2");
    } else {
        return("No se puede dividir entre 2");
    }
}

function Ejercicio2(){
    let valorIngresado = document.getElementById("inputEjercicio2").value;
    let resultado = divisibleEntreDos(valorIngresado);
    let resultado1 = document.getElementById("resultado2");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

//EJERCICIO 3
/* Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.*/

function numeroPar(num) {
    if (parseFloat(num) % 2 === 0) {
    alert("Numero PAR");
    } else {
    alert("Numero IMPAR");
    }
}

function Ejercicio3() {
    let valorIngresado = document.getElementById("inputEjercicio3").value;
    let resultado = numeroPar(valorIngresado);
    let resultado1 =  document.getElementById("resultado3");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado; 
}   

//EJERCICIO 4
/*Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/

function ganarPremio(num) {
    if (parseFloat(num) === 1000) {
        return("Ganaste un premio");
    } else {
        return( num + "Lo sentimos, sigue participando");
    }
}

function Ejercicio4 () {
    let valorIngresado = document.getElementById("inputEjercicio4").value;
    resultado = ganarPremio(valorIngresado);
    resultado3 = document.getElementById("resultado4");
    resultado3.innerHTML = "";
    resultado3.innerHTML = resultado;
}

//EJERCICIO 5
/*Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.*/

function numeroMenor(num1, num2) {
    if ((parseFloat(num1) > (parseFloat(num2)))) {
        return("El número " + num1 + " es mayor que el número " + num2);
    } else if ((parseFloat(num1) < (parseFloat(num2)))) {
        return("El número " + num1 + " es menor que el número " + num2);
    } else {
        return("Los números " + num1 + " y " + num2 + " son iguales");
    }
}

function Ejercicio5 () {
    let valorIngresado1 = document.getElementById("inputEjercicio5-1").value;
    let valorIngresado2 = document.getElementById("inputEjercicio5-2").value;
    let resultado = numeroMenor(valorIngresado1, valorIngresado2);
    let resultado1 = document.getElementById("resultado5");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

//EJERCICIO 6
/*Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.*/

function numeroMayor(num5, num6, num7) {
    if (parseFloat(num5) > parseFloat(num6) && parseFloat(num5) > parseFloat(num7)) {
        if(parseFloat(num6) === parseFloat(num7)) {
            return("El número mayor es el: " + num5 + ". " + "Y el número: " + num6 + " está repetido")
        }
        return("El número: " + num5 + " es el mayor"); 
    } else if (parseFloat(num6) > parseFloat(num5) && parseFloat(num6) > parseFloat(num7)) {
        if(parseFloat(num5) === parseFloat(num7)) {
            return("El número mayor es el: " + num6 + ". " + "Y el número: " + num5 + " está repetido")
        }
        return("El número: " + num6 + " es el mayor");
    } else if (parseFloat(num7) > parseFloat(num5) && parseFloat(num7) > parseFloat(num6)) {
        if(parseFloat(num5) === parseFloat(num6)) {
            return("El número mayor es el: " + num7 + ". " + "Y el número: " + num6 + " está repetido")
        }
        return("El número: " + num7 + " es el mayor");
    } else if (parseFloat(num5) === parseFloat(num6) && parseFloat(num6) === parseFloat(num7)){
        return("Todos los números iguales");
    } else if (parseFloat(num5) === parseFloat(num6)) {
        return("El número menor es el: " + num7 + ". " + "Y el número: " + num5 + " está repetido")
    } else if (parseFloat(num6) === parseFloat(num7)) {
        return("El número menor es el: " + num5 + ". " + "Y el número: " + num6 + " está repetido")
    } else if (parseFloat(num5) === parseFloat(num7)) {
        return("El número menor es el: " + num6 + ". " + "Y el número: " + num5 + " está repetido")
    } 
}

function Ejercicio6() {
    let valorIngresado1 = document.getElementById("inputEjercicio6-1").value;
    let valorIngresado2 = document.getElementById("inputEjercicio6-2").value;
    let valorIngresado3 = document.getElementById("inputEjercicio6-3").value;
    let resultado = numeroMayor(valorIngresado1, valorIngresado2, valorIngresado3);
    let resultado1 = document.getElementById("resultado6");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;

}

//EJERCICIO 7
/* Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/

function diaSemana (dia) {
    if (dia === "lunes") {
        return("1° dia de la semana lunes");
    } else if (dia === "viernes") {
        return("viernes y el cuerpo lo sabe");
    } else if (dia === "sabado"|| dia === "sábado") {
        return("Hoy es fin de semana");
    } else if (dia === "domingo") {
        return( "Se acabo el descanzo");
    } else {
        return("Falta mucho para el fin de semana");
    }
}

function Ejercicio7() {
    let valorIngresado = document.getElementById("inputEjercicio7").value.toLowerCase();
    let resultado = diaSemana(valorIngresado);
    let resultado1 = document.getElementById("resultado7");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

//EJERCICIO 8
/* Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/

function calificar(input) {
    if(parseFloat(input) >= 1 && parseFloat(input) <= 10) {
        if(parseFloat(input) < 6) {
            return(`Reprobado`);
        } else if(parseFloat(input) >= 6 && parseFloat(input) <= 8){
            return(`Regular`);
        } else if(parseFloat(input) > 8 && parseFloat(input) <= 9){
            return(`Bien`);
        } else {
            return(`Excelente`);
        }
    } else {
        return(`Fuera de rango`)
    }
}

function ejercicio8() {
    let valorIngresado = document.getElementById("inputEjercicio8").value;
    let resultado = calificar(valorIngresado);
    let resultado1 = document.getElementById("resultado8");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

//EJERCICIO 9
/*Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

function precioHelado(input) {
    let precioHelado = 50;
    let precioOreo = 10;
    let precioKitkat = 15;
    let precioBrownie = 20;
    if(input == "oreo") {
        return(`El precio de su helado es de: ${precioHelado+precioOreo}`);
    } else if (input == "kitkat") {
        return(`El precio de su helado es de: ${precioHelado+precioKitkat}`);
    } else if (input == "brownie") {
        return(`El precio de su helado es de: ${precioHelado+precioBrownie}`);
    } else {
        return(`No tenemos ese topping. El precio de su helado es de ${precioHelado}`)
    }
}

function ejercicio9() {
    let valorIngresado = document.getElementById("inputEjercicio9").value.toLowerCase();
    let resultado = precioHelado(valorIngresado);
    let resultado1 = document.getElementById('resultado9');
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}
//EJERCICIO 10
/*Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

function precioCurso(curso, beca) {
    let valorMesCourse = 4999;
    let valorMesCarrera = 3999;
    let valorMesMaster = 2999;
    let becaFacebook = 0.8;
    let becaGoogle = 0.85;
    let becaJosua = 0.5;
    if(curso == "course" && beca == "") {
        return(`${valorMesCourse}`)
    } else if(curso == "carrera" && beca == "") {
        return(`${valorMesCarrera}`)
    } else if(curso == "master" && beca == "") {
        return(`${valorMesMaster}`)
    } else if(curso == "course" && beca == "beca facebook") {
        return(`${valorMesCourse*becaFacebook}`)
    } else if(curso == "carrera" && beca == "beca facebook") {
        return(`${valorMesCarrera*becaFacebook}`)
    } else if(curso == "master" && beca == "beca facebook") {
        return(`${valorMesMaster*becaFacebook}`)
    } else if(curso == "course" && beca == "beca google") {
        return(`${valorMesCourse*becaGoogle}`)
    } else if(curso == "carrera" && beca == "beca google") {
        return(`${valorMesCarrera*becaGoogle}`)
    } else if(curso == "master" && beca == "beca google") {
        return(`${valorMesMaster*becaGoogle}`)
    } else if(curso == "course" && beca == "beca josua") {
        return(`${valorMesCourse*becaJosua}`)
    } else if(curso == "carrera" && beca == "beca josua") {
        return(`${valorMesCarrera*becaJosua}`)
    } else if(curso == "master" && beca == "beca josua") {
        return(`${valorMesMaster*becaJosua}`)
    }
}

function precioTotal(tipo, mensualidad) {
    let duracionCourse = 2;
    let duracionCarrera = 6;
    let duracionMaster = 12;
    if(tipo == "course") {
        return(`El precio total por los 2 meses es de: ${Math.round(parseFloat(mensualidad)*duracionCourse)}`)
    } else if(tipo == "carrera") {
        return(`El precio total por los 6 meses es de: ${Math.round(parseFloat(mensualidad)*duracionCarrera)}`)
    } else if(tipo == "master") {
        return(`El precio total por los 12 meses es de: ${Math.round(parseFloat(mensualidad)*duracionMaster)}`)
    }
}

function Ejercicio10() {
    let valorIngresado1 = document.getElementById("inputEjercicio10-1").value.toLowerCase();
    let valorIngresado2 = document.getElementById("inputEjercicio10-2").value.toLowerCase();
    let resultado = precioCurso(valorIngresado1, valorIngresado2);
    let resultadoMensual = "";
    if(valorIngresado2 == ""){
        resultadoMensual = `El valor mensual de esta modalidad es de: ${Math.round(resultado)}`
    } else {
        resultadoMensual = `El valor mensual de esta modalidad con Beca es de: ${Math.round(resultado)}`
    }
    let resultado1 = document.getElementById("resultado10");
    resultado1.innerHTML= "";
    resultado1.innerHTML = resultadoMensual;
    let resultado2 = document.getElementById("resultado101");
    let resultadoTotal = precioTotal(valorIngresado1, resultado);
    resultado2.innerHTML= "";
    resultado2.innerHTML = resultadoTotal;
}


//EJERCICIO 11
/*Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

