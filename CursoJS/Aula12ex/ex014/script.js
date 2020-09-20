function carregar(){
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 0 && hora < 12){
        img.src = "image/fotomanha.jpg"
        window.document.body.style.background ="#fccf58"
    }else if(hora >= 12 && hora < 18){
        img.src = "image/fototarde.jpg"
        window.document.body.style.background ="#a36766"
    }else{
        img.src = "image/fotonoite.jpg"
        window.document.body.style.background ="#997cb4"
    }
}