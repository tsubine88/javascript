//var isMorning = true
//var isAfternoon = false
//var isNight = false

var date = new Date()
var hour = date.getHours()

//if (hour > 10) {
//    document.write('Buna dimineata') + hour
//} else if (isAfternoon) {
//    document.write('Good afternoon')


//* daca e dimineata atunci scriu ' Buna dimineata' 
//dimineata = ora pana in 12
// altefel daca este pranz scriu 'POfta buna'
// daca este dupaamiaza scriu ' Buna ziua' 
//daca este seara scriu ' Buna seara' 
//Daca este noapte scriu ' Noapte buna'    :

var startOfNight = 22

if (hour < 4) {
    document.write('Noapte buna!')
}
else if (hour < 12) {
    document.write('Buna dimineata')
} else if (hour == 12) {
    document.write('Pofta buna!')
} else if (hour < 17) {
    document.write('Buna ziua!')
} else if (hour < startOfNight) {
    document.write('Buna seara!')
} else {
    document.write('Noapte buna!')
}
//var startOfNight = 22
//var endOfNight = 4
//
// var isNight = hour > startOFNight && hour < endOfNight
//if (isNight){
 //   document.write ('Noapte buna!')
}