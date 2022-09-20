 function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    array = ["Manzana", "Pera", "Mandarina", "Frutilla", "Durazno"];

    array.shift();

    return array
    
  }
  console.log(devolverPrimerElemento());
  
  
  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    array = ["Manzana", "Pera", "Mandarina", "Frutilla", "Durazno"];

    array.pop();

    return array

  }
  console.log(devolverUltimoElemento());
  
  
  function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    array = ["Manzana", "Pera", "Mandarina", "Frutilla", "Durazno"];

    return array.length

  }
  console.log(obtenerLargoDelArray());
  
  
  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:

    array = [0, 1, 2, 3, 4, 8,]
    for(let i = 0; i < array.length; i++){
      console.log(array[i])
    }
  }
  incrementarPorUno();
  
  
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:

    array = ["Manzana", "Pera", "Mandarina", "Frutilla", "Durazno"]
    elemento = 'Mora'

    array.push(elemento)

    return array

  }
  console.log(agregarItemAlFinalDelArray());
  
  
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array = ["Manzana", "Pera", "Mandarina", "Frutilla", "Durazno"]
    elemento = 'banana';

    array.unshift(elemento)

    return array
  }
  console.log(agregarItemAlComienzoDelArray());
  
  
  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hola', 'mundo!'] -> 'Hello mundo!'
    // Tu código:

    palabras = [`Hola mundo en JavaScript`];

    return palabras.toString();

  }
  console.log(dePalabrasAFrase());
  
  
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:

    array = ["Manzana", "Pera", "Mandarina", "Frutilla", "Durazno", elemento];

    if(array[5] === elemento){
      return true
    }else{
      return false
    }
  }
  console.log(arrayContiene());
  
  
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:

    numeros = [0, 1, 2, 3, 4, 8,]
    let sum = 0;

    for(let i = 0; i < numeros.length; i++){
     sum += numeros[i]
    }

    return sum
  }
  console.log(agregarNumeros());
  
  
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
 
    const arrayPromedios = []
    let promedio = 0

    resultadosTest.forEach(lista => {
      let sumatoria = 0
      for (let i = 0; i < lista.length; i++) {
        sumatoria += lista[i]
      }
      promedio = sumatoria / lista.length
      arrayPromedios.push(promedio) 
      promedio = 0
    });

    return arrayPromedios
  }
  console.log(promedioResultadosTest([[2,4,8],[9,6,7],[1,1,1]]));

  
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    numeros = [0, 1, 2, 3, 4, 8,]
    const mayor = Math.max(...numeros) 
    return mayor
  }
  console.log(numeroMasGrande());
  
  
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
  let productoria = 1
  
  if (arguments.length === 0){
    return 0
  } else if (arguments.length === 1){
    return arguments[0]
  } else {
    for (let i = 0; i < arguments.length; i++) {
      productoria*= arguments[i]
    }
  }
  return productoria
  }
 
  
  console.log(`La Productoria de multiplicarArgumentos(3,3,3) es: ${multiplicarArgumentos(3,3,3)}`)
  console.log(`La Productoria de multiplicarArgumentos(145) es: ${multiplicarArgumentos(145)}`)
  console.log(`La Productoria de multiplicarArgumentos() es: ${multiplicarArgumentos()}`)

  function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    // Tu código:

    let elementos = [10, 12, 15, 19, 25, 30];
   
    array = elementos.filter(elemententos => elemententos > 18);

    return array
  }
  console.log(cuentoElementos());
  
  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   

    diaSemana = [1,2,3,4,5,6,7];
    numeroDeDia = 7

    if(diaSemana[0] == numeroDeDia || diaSemana[6] == numeroDeDia){
      return 'Es fin de semana'
    }else {
      return 'Es dia laboral'
    }
  } 

  function empiezaConNueve(num) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    
    const arrayNumerosString = [num].join('')

    return (arrayNumerosString[0] === "9") ? true : false
  }
  console.log(empiezaConNueve(92))
  console.log(empiezaConNueve(299))


  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  

    let j = 0

    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] !== arreglo[j + 1])
        return false
    }

    return true
  } 
  
  console.log(todosIguales([3,3,3]))
  console.log(todosIguales([3,3,1]))
  console.log(todosIguales([3,1,3]))
  console.log(todosIguales([1,3,3]))

  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:

    array = ['Febrero', 'Enero', 'Octubre', 'Noviembre', 'Junio', 'Abril', 'Agosto', 'Marzo', 'Diciembre', 'Mayo', 'Julio', 'Septiembre'];

    array.forEach(element => {
      let nuevoArray = array.filter(mes => mes == 'Enero' || mes == 'Marzo' || mes == 'Noviembre')
        console.log(`${nuevoArray[0]} ${nuevoArray[1]} ${nuevoArray[2]}`)
    });
  }
  mesesDelAño();

  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:

    const mayoresACien = array.filter(numero => numero>100)
    
    return mayoresACien
  }

  console.log(mayorACien([3,300,45,134,7,150]))
  console.log(mayorACien([3,30,45,34,7,15]))
  console.log(mayorACien([180,1]))
  
  
  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe 
    //interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:

    const array = []

    for (let i = 1; i <= 10; i++) {
      
      if ((numero+=2) == i){
        console.log("Se interrumpio la ejecución")
        break
      }
      array.push(numero)      
    }

    return array
  }
  
console.log(breakStatement(3))
console.log(breakStatement(-2)) 

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  const array = [];

  for (let i = 1; i <= 10; i++) {

    if (i == 5)
      continue
    
    array.push(numero += 2)

  }

  return array; 
}

console.log(continueStatement(1));
