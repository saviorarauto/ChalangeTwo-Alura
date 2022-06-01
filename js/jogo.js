let palavras = ["GUARDA-CHUVA", "LIVRO", "ECHODOT", "TECLADO", "TELEVISOR", "SMARTWATCH", "CACHORRO", "MALA", "VIAGEM", "AEROPORTO", "GELADEIRA", "MICROONDAS", "PINGUIM", "ONOMATOPEIA", "GINECOLOGISTA", "BOMBEIRO", "IGREJA", "ESPELHO", "CACHIMBO", "CORUJA", "UNICORNIO"];
preLoadStorage(palavras);
let hasTrace = false;

function preLoadStorage(palavras){
    let arrayStorage = JSON.parse(localStorage.getItem('arrayPalavras') || '[]');
    let arrayFinal = removeDuplicates(arrayStorage.concat(palavras));
    localStorage.setItem('arrayPalavras', JSON.stringify(arrayFinal));
    arrayStorage = JSON.parse(localStorage.getItem('arrayPalavras'));
    return arrayStorage;
}

// localStorage.clear();
let arrayStorageUpdate = JSON.parse(localStorage.getItem('arrayPalavras'))
console.log(arrayStorageUpdate);
let palavraSorteada = sortearPalavra(arrayStorageUpdate);
console.log(palavraSorteada);
montarPalavra(palavraSorteada);
let numeroErros = 4;
let numeroAcertos = palavraSorteada.length;

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        let letter = event.target.innerHTML;
        const hasClass = event.target.classList.contains('square');
        if (hasClass) {
            event.target.classList.add('changeOpacity');
            let posicaoLetraArray = positionLetter(letter, palavraSorteada);
            if (posicaoLetraArray.length > 0) {
                posicionarLetra(letter, posicaoLetraArray);
            }
            else {
                numeroErros++;
                matarBoneco(numeroErros);
            }
        }
    });
}

function positionLetter(letra, arrayPalavra) {
    let resultArray = [];
    for (let i = 0; i < arrayPalavra.length; i++) {
        if (arrayPalavra[i] == letra) {
            resultArray.push(i)
        }
    }
    return resultArray;
}

function posicionarLetra(letraSelecionada, posicaoLetra) {
    for (let i = 0; i < posicaoLetra.length; i++) {
        let position = posicaoLetra[i];
        var targetDiv = document.getElementById("linha1").getElementsByClassName("letras")[position];
        targetDiv.textContent = letraSelecionada;
        if(numeroAcertos>0){
            numeroAcertos--;
            if(numeroAcertos==0){
                win();
            }
        }
    }
}

function sortearPalavra(palavras) {
    const position = Math.floor(Math.random() * palavras.length);
    let palavra = palavras[position]
    return palavra.normalize("NFD").toUpperCase();
};

function montarPalavra(palavraSorteada) {
    let positionTrace = [];
    for (let i = 0; i < palavraSorteada.length; i++) {
        let letraposition = palavraSorteada[i]
        if(letraposition=="-"){
            hasTrace = true;
            positionTrace.push(i)
        }
        addNewLetter()
    }
    if(hasTrace){
        posicionarLetra("-", positionTrace);
    }
}

function addNewLetter() {
    let letraDiv = document.createElement('div');
    letraDiv.style.animation = "fade-in 3s";
    letraDiv.setAttribute("class", "letras")
    let palavraDiv1 = document.getElementById('linha1')
    let count1 = palavraDiv1.childElementCount;
    if (count1 < 14) {
        palavraDiv1.appendChild(letraDiv)
        console.log(count1)
    }

}

function removeDuplicates(inArray){
    var arr = inArray.concat() // create a clone from inArray so not to change input array
    //create the first cycle of the loop starting from element 0 or n
    for(var i=0; i<arr.length; ++i) { 
        //create the second cycle of the loop from element n+1
        for(var j=i+1; j<arr.length; ++j) { 
            //if the two elements are equal , then they are duplicate
            if(arr[i] === arr[j]) {
                arr.splice(j, 1); //remove the duplicated element 
            }
        }
    }
    return arr;
}
