const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 690}px)`;
}

setInterval(carrossel, 3000)

function realizarBusca(){
    let entrada = document.getElementById("busca_jogo");
    let jogo_escolhido = entrada.value;
    //console.log(jogo_escolhido);
    if(jogo_escolhido == "Grand Theft Auto"){
        window.location.href = "jogo01.html"
    }
    else if(jogo_escolhido == "The Ultimate Doom"){
        window.location.href = "jogo02.html"
    }
    else if(jogo_escolhido == "Worms Armageddon"){
        window.location.href = "jogo03.html"
    }
    else if(jogo_escolhido == "Doom II"){
        window.location.href = "jogo04.html"
    }
    else if(jogo_escolhido == "Wolfenstein 3D"){
        window.location.href = "jogo05.html"
    }
    else if(jogo_escolhido == "Quake"){
        window.location.href = "jogo06.html"
    }
    else if(jogo_escolhido == "Diablo"){
        window.location.href = "jogo07.html"
    }
    else if(jogo_escolhido == "Half-Life"){
        window.location.href = "jogo08.html"
    }
    else if(jogo_escolhido == "RollerCoaster Tycoon"){
        window.location.href = "jogo09.html"
    }
    else if(jogo_escolhido == "Duke Nukem 3D"){
        window.location.href = "jogo10.html"
    }
    else if(jogo_escolhido == "Outlaws"){
        window.location.href = "jogo11.html"
    }
    else if(jogo_escolhido == "Shadow Warrior"){
        window.location.href = "jogo12.html"
    }
    else{
        window.location.href = "busca_nao_encontrada.html"
    }

}

botao_busca.addEventListener("onclick", realizarBusca)