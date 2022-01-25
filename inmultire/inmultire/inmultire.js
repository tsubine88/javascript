var i = 2
var j = 1
var max = 10
// while (j <= max){
//string cu concatenare
//  var message = j + 'x' + i + '=' + i * j + '<br>'
//string cu interpolare
//    message = `${j} x ${i} = ${j*i} <br>`
//   document.write(message)
//   j++
//}
for (i = 1; i <= max; i++) {
    for (var j = 1; j <= max; j++) {
        var message = j + 'x' + i + '=' + i * j + '<br>'
        message = `${j} x ${i} = ${j * i} <br>`
        document.write(message)
    }
    document.write('<br>')
}
