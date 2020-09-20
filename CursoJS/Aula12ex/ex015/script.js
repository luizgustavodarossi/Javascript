function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById("txtano")
    let res = window.document.querySelector("div#res")
    if(fano.value.length == 0 || Number(fano.value) > ano || fano.value < ano-100){
        window.alert("[Erro] Verifique os dados e teste novamente!")
        window.document.querySelector("input#txtano").value = ""
    }else{
        let sexo = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = window.document.createElement('img')
        img.setAttribute('id','foto')
        
        if(sexo[0].checked){
            if(idade >= 60){
                genero = 'um Senhor'
                img.setAttribute('src','image/homem/velhohomem.jpg')
            }else if(idade >= 30){
                genero = 'um Homem'
                img.setAttribute('src','image/homem/adultohomem.jpg')
            }else if(idade >= 10){
                genero = 'um Jovem'
                img.setAttribute('src','image/homem/jovemhomem.jpg')
            }else{
                genero = 'um Menino'
                img.setAttribute('src','image/homem/bebehomem.jpg')
            }
        }else{
            if(idade >= 60){
                genero = 'uma Senhora'
                img.setAttribute('src','image/mulher/velhomulher.jpg')
            }else if(idade >= 30){
                genero = 'uma Mulher'
                img.setAttribute('src','image/mulher/adultomulher.jpg')
            }else if(idade >= 10){
                genero = 'uma Jovem'
                img.setAttribute('src','image/mulher/jovemmulher.jpg')
            }else{
                genero = 'uma Menina'
                img.setAttribute('src','image/mulher/bebemulher.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}