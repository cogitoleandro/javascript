var valores = [5, 6, 10, 21, 26, 30, 31, 50, 1]
//for (var c = 0; c < valores.length; c ++) {
//    console.log(`O vetor na posição ${c} é ${valores[c]}`)
//}
c = 0
for ( c in valores) {
    console.log(`A posição ${c} do vetor é ${valores[c]}`)
}
var c = valores.indexOf(50)
if (c == -1) {
    console.log('O valor não foi encontrado ...')
} else {
    console.log(`O valor esta na posição ${c}`)
}