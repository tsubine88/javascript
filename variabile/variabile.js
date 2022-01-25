//cele trei tipuri de variabile
// punem data curenta in variabila date
var date = new Date()

var hour = date.getHours() 
var minutes = date.getMinutes()
var seconds = date.getSeconds ()
var isRaining = false 
//am adaugat la un sir o variabila (concatenarea / foloseste semnul +)
var message = "Hello! Este ora " + hour + ":" + minutes + ":" + seconds
// o variabila fara valoare sau mai degraba nedefinita
var city

// alert(message)
// mesajul va aparea in consola din browser
console.log(message)
// a += 1 adauga 1 lui a
// 
document.write('<h1>' + message + '</h1>')