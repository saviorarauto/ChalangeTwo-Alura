function erroTronco1() {
    let troncoUmDiv = document.getElementById('tronco1')
    let classDiv = document.getElementById("tronco1").className;
    if (classDiv == "") {
        troncoUmDiv.classList.add("tronco1");
    }
}

function erroTronco2() {
    let troncoDoisDiv = document.getElementById('tronco2')
    let classDiv = document.getElementById("tronco2").className;
    if (classDiv == "") {
        troncoDoisDiv.classList.add("tronco2");
    }
}

function erroTronco3() {
    let troncoTresDiv = document.getElementById('tronco3')
    let classDiv = document.getElementById("tronco3").className;
    if (classDiv == "") {
        troncoTresDiv.classList.add("tronco3");
    }
}

function erroCorda() {
    let cordaDiv = document.getElementById('corda')
    let classDiv = document.getElementById("corda").className;
    if (classDiv == "") {
        cordaDiv.classList.add("corda");
    }
}

function erroCabeca() {
    let cabecaDiv = document.getElementById('cabeca-div')
    let classDiv = document.getElementById("cabeca-div").className;
    if (classDiv == "") {
        cabecaDiv.classList.add("cabeca-viva");
    }
}

function erroCorpo() {
    let corpoDiv = document.getElementById("corpo-div")
    let classDiv = document.getElementById("corpo-div").className;
    if (classDiv == "") {
        corpoDiv.classList.add("corpo");
    }
}

function erroBracoDireito() {
    let direitoBracoDiv = document.getElementById("braco-direito-div")
    let classDiv = document.getElementById("braco-direito-div").className;
    if (classDiv == "") {
        direitoBracoDiv.classList.add("braco-direito");
    }
}

function erroBracoEsquerdo() {
    let esquerdoBracoDiv = document.getElementById("braco-esquerdo-div")
    let classDiv = document.getElementById("braco-esquerdo-div").className;
    if (classDiv == "") {
        esquerdoBracoDiv.classList.add("braco-esquerdo");
    }
}

function erroPernaDireita() {
    let direitaPernaDiv = document.getElementById("perna-direita-div")
    let classDiv = document.getElementById("perna-direita-div").className;
    if (classDiv == "") {
        direitaPernaDiv.classList.add("perna-direita");
    }
}

function erroPernaEsquerda() {
    let esquerdaPernaDiv = document.getElementById("perna-esquerda-div")
    let classDiv = document.getElementById("perna-esquerda-div").className;
    if (classDiv == "") {
        esquerdaPernaDiv.classList.add("perna-esquerda");
    }
}
// document.getElementById('troca-cabeca-btn').addEventListener('click', trocaCabeca);

function ultimaChance() {
    let cabecaDiv = document.getElementById('cabeca-div')
    let cabecaclassDiv = document.getElementById("cabeca-div").className;

    if (cabecaclassDiv == "cabeca-viva") {
        cabecaDiv.classList.remove("cabeca-viva");
        cabecaDiv.classList.add("cabeca-quase");
    }
}

function gameOver() {
    let cabecaDiv = document.getElementById('cabeca-div')
    let cabecaclassDiv = document.getElementById("cabeca-div").className;

    let bracoDireitoDiv = document.getElementById('braco-direito-div')
    let bracoDireitoclassDiv = document.getElementById("braco-direito-div").className;

    let bracoEsquerdoDiv = document.getElementById('braco-esquerdo-div')
    let bracoEsquerdoclassDiv = document.getElementById("braco-esquerdo-div").className;

    let cordaDiv = document.getElementById('corda')
    let cordaClassDiv = document.getElementById("corda").className;

    let corpoDiv = document.getElementById('corpo-humano-div')
    let corpoClassDiv = document.getElementById("corpo-humano-div").className;

    let containerDiv = document.getElementById('forca')
    let containerClassDiv = document.getElementById("forca").className;


    if (cabecaclassDiv == "cabeca-quase") {
        cabecaDiv.classList.remove("cabeca-quase");
        cabecaDiv.classList.add("cabeca-morta");
    }

    if (bracoDireitoclassDiv == "braco-direito") {
        bracoDireitoDiv.classList.toggle("braco-direito-morto");
    }

    if (bracoEsquerdoclassDiv == "braco-esquerdo") {
        bracoEsquerdoDiv.classList.toggle("braco-esquerdo-morto");
    }

    if (cordaClassDiv == "corda") {
        cordaDiv.classList.toggle("corda-gameOver");
    }

    if (corpoClassDiv == "boneco") {
        corpoDiv.classList.toggle("boneco-morto");
    }

    if (containerClassDiv == "background-class") {
        containerDiv.classList.toggle("background-class-off");
    }

    toggleScreen('container-btn', false);
    this.toggleScreen('reset-btn', false);
    this.toggleScreen('cancel-btn', false);
    toggleScreen('gameover-screen',true);

}

function matarBoneco(nErros){

    switch (nErros) {
        case 5:
            erroCabeca()
            break;
        case 6:
            erroCorpo()
            break;
        case 7:
            erroBracoDireito()
            break;
        case 8:
            erroBracoEsquerdo()
            break;
        case 9:
            erroPernaDireita()
            break;
        case 10:
            erroPernaEsquerda()
            break;
            case 11:
                ultimaChance()
                break;
            case 12:
                gameOver()
                break;
        default:
            break;
    }
}