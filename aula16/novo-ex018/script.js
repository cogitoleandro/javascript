var num = document.getElementById('fnum')
var list = document.getElementById('flist')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Dados inválidos ou número já encontrado na lista!')
    }
    num.value = ' '
    num.focus()
}

function finalizar() {
    if (valores.length  == 0) {
        window.alert('Insira os valores antes de finalizar ...')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for( var c in valores) {
            soma += valores[c]
            media = soma / tot
            if (valores[c] > maior)
                maior = valores[c]
            if (valores[c] < menor)
                menor = valores[c]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram ${tot} números cadastrados ...</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados é de ${media}</p>`
    }
}