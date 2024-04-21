
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n) != -1)) {
        return true
    } else{
        return false
    }
}


function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        window.alert('Dados Ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista ...')
    }

}

valores.push(50, 50)