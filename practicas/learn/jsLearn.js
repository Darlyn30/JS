// variables


/* una variable es un tipo de memoria vacia que le puedes almacenar un valor, las variables en JS se pueden llamar de diferentes maneras
let
var
const
a las primeras 2 se les puede cambiar el valor segun consideres, pero a la constante como su nombre lo indica, es algo que no cambia, siempre se mantiene con su mismo valor
                                EX                          */

let nombre = 'darlyn';
let apellido = 'olivo';

/* despues lo podemos llamar por consola utilizando un console.log*/

console.log(nombre, apellido)


// condicionales

/* estas son unas serie de condiciones que se cumplen o no, para hacer algo que si esa condicion se cumple pues ejecuta una accion
 y estas se llaman a traves de los comandos (if)(else)*/


 //                   EX        //

 
var numero1 = 15;
var numero2 = 2;


if (numero1 > numero2) {
    console.log('el numero mayor es 15')
    }
    else{
        console.log('error')
};

/*tambien se pueden añadir mas de una condicion dentro de algun problema que quieras resolver */

//                          EX            //

var nota1 = 70;
var nota2 = 75;
var nota3 = 82;
var nota4 = 97;
var nota5 = 89;

// por ejemplo aqui quiero que me imprima en la consola las calificaciones de estas notas entre A(90-100) B(80-89) C(70-79) F(<69)

if (nota1>70 || nota1<80){
    console.log('su nota es C')
    }
    else{
        if(nota2>80 || nota2<90){
            console.log('su nota es B')
        }
        else{

        }   if(nota3>90 || nota3<=100){
            console.log('su nota es A')

        }    
        else{

        } if(nota1, nota2, nota3, nota4, nota5<69){
            console.log('reprobado')

        }
};





//condicional dentro de una funcion

function promedio (score1, score2 ){

    var results = score1, score2;
    if(score1>score2){
        return results
    } else{
        console.log('ERROR')
    }
};

var recibelo = promedio (100, 15);
console.log(recibelo);

//bucles

/*como su nombre lo indica los bucles son un tipo de funcion que cumple con una condicion y se repite indefinidamente hasta que cumpla con la condicion asignada
hay 2 formas de llamar a los bucles
while
for*/

//                     EX                //

// while

let contador = 0;
while(contador <5) {
    console.log(contador)
    contador = contador + 1
};

//en la consola te saldra como un camino desde el valor de la variable hasta lo que hara, en este caso menor que 5, osea que en 4 se detendra

// for 

for (let conter = 0; conter <10; conter = conter + 1){
    console.log(conter)
};

// obtendra el mismo resultado que usando while, pero en menos lineas,


// con el for se suelen llamar mas con la (i)
for (let i = 0; i<5; i++) {
    //el i++ significa lo mismo que i + 1 o variable+1
    console.log(i)
};


// funciones

/* las funciones son lo que le da la funcionalidad a nuestro projecto */

//                   EX                   //

function saludar(){
    console.log('klk')
};

saludar ();

function multiplicar(num1, num2){
    let resultado = num1*num2
    return resultado
};

// cuando hay un return se necesita una variable que almacene la funcion
let recibidor = multiplicar(2, 5);
console.log(recibidor)






// TODO ESTA MOSTRADO SOLAMENTE POR CONSOLA TODO ESTE JS EN EL HTML
