let botaoFechar = document.querySelector("#close-btn");
botaoFechar.addEventListener("click", function (event) {
    event.preventDefault();
    restartGame();
})

function handleInput(e) {
    var ss = e.target.selectionStart;
    var se = e.target.selectionEnd;
    e.target.value = e.target.value.split(" ").join("");
    e.target.value = e.target.value.toUpperCase();
    e.target.selectionStart = ss;
    e.target.selectionEnd = se;
 }

 let botaoAdicionarPalavra = document.querySelector("#submit-btn");
botaoAdicionarPalavra.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#form-palavra");
    let novaPalavra = form.palavra.value;
    if(novaPalavra!=""){
        atualizarStorage(novaPalavra);
        alert("Você adicionou a palavra " + novaPalavra)
    }
    form.reset();
})


function atualizarStorage(palavra){

    let arrayStorage = JSON.parse(localStorage.getItem('arrayPalavras') || '[]');
    let arrayFinal = removeDuplicates(arrayStorage.concat(palavra));
    localStorage.setItem('arrayPalavras', JSON.stringify(arrayFinal));
    arrayStorage = JSON.parse(localStorage.getItem('arrayPalavras'));
    return arrayStorage;

}

let form = document.querySelector("#form-palavra");

form.onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;     
    if (key == 13) {
      e.preventDefault();
      let novaPalavra = form.palavra.value;
      if(novaPalavra!=""){
          atualizarStorage(novaPalavra);
      }
      form.reset();
    }
}