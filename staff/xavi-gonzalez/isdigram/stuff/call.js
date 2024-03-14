function Person(name, surname) {
    this.name = name
    this.surname = surname
}

var Peter = new Person ('Peter', 'Pan')

console.log(Peter);
//Person {name: 'Peter', surname: 'Pan'}



var newPerson = {}

Person.call(newPerson, 'Perico', 'De los Palotes')
console.log(newPerson);
//{name: 'Perico', surname: 'De los Palotes'}


var newPerson = {}

Person.call(newPerson, 'Pepe', 'Payaso')
console.log(newPerson);
//{name: 'Pepe', surname: 'Payaso'}


var names =  {0: 'Pepe', 1: 'Manolo', 2: 'Perico', 3: 'Trolaso', length: 3 }

Array.prototype.forEach.call(names,function (elements) {
    console.log(elements);
})

//Pepe
//Manolo
//Perico
//no coge Trolaso, porque el length has puesto que es 3. Si pusueras 4, saldria Trolaso. Si no pusieras el length, no sale nada. Porque el forEach itera sobre el length.