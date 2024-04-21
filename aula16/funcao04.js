function fatorial (n) {
    var a = 1
    for(var c = n; c > 1; c --) {
        a *= c
    }
    return a    
}
console.log(fatorial(5))


