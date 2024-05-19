function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')   
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente ...')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'arquivo')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança a imagem é grande depois baixo uma menor ...
                img.setAttribute('src', 'man_crianca.jpg')
            }
            else if (idade < 21) {
                 // jovem
                 img.setAttribute('src', 'man_jovem.jpg')
            }
            else if (idade < 50) {
                 // adulto
                 img.setAttribute('src', 'man_adulto.jpg')
            }
            else  { 
                //idoso
                img.setAttribute('src', 'man_idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança a imagem é grande depois baixo uma menor ...
                img.setAttribute('src', 'woman_crianca.jpg')
            }
            else if (idade < 21) {
                 // jovem
                 img.setAttribute('src', 'woman_jovem.jpg')
            }
            else if (idade < 50) {
                 // adulto
                 img.setAttribute('src', 'woman_adulta.jpg')
            }
            else { (idade > 50)
                //idoso
                img.setAttribute('src', 'woman_idosa.jpg')
            }

        }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`
        res.appendChild(img)
    }
}

