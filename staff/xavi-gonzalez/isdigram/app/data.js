// data

//var users = []
if (localStorage.users) {
    var users = JSON.parse(localStorage.users)
}
else {
    var users = []
}


/* solucion manu con ternarios
var users = localStorage.users ? JSON.parse(localStorage.users) : []
*/