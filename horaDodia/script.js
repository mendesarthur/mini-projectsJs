function carregar(){
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src= 'img/fotom.jpeg'
        document.body.style.background = '#c79269'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        document.body.style.background = '#c58a47'
        img.src = 'img/fotot.jpeg'
    } else {
        img.src = 'img/foton.jpeg'
        //BOA NOITE
        document.body.style.background = '#0f2123'
    }
}
const body = document.querySelector("body")
body.addEventListener("load", carregar)