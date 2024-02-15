delete String.prototype.repeat


function repeat(string, count) {
    // TODO implement me
    //Crear una variable auxiliar "result" para almacenar el string con sus repeticiones
    //Inicializar la variable anterior con el string vacio
    var result = ""
    //Inicializar bucle for con una variable auxiliar (por ejemplo "i")
    //Poner condicion de continuidad en el for limitada a "count" veces
    //Incrementamos la variable auxiliar "i" una vez en cada iteracion
    //Asignar a la variable auxiliar "result" su valor anterior + el valor del string (todo dentro del cuerpo del for)
    for (var i = 0; i < count; i++) {
        result = result + string
    }
    //Retornar el resultado de la variable "result"
    return result
}
 

// CASE 1

var s = 'happy! '

var result = repeat(s, 3)

console.log(result)
// 'happy! happy! happy!'