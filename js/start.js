function startGame() {
    this.toggleScreen('start-screen', false);
    this.toggleScreen('container', true);
    this.toggleScreen('gameover-screen', false);

    erroTronco1();
    erroTronco2();
    erroTronco3();
    erroCorda();

}

function newWord() {
    this.toggleScreen('start-screen', false);
    this.toggleScreen('container', false);
    this.toggleScreen('gameover-screen', false);
    this.toggleScreen('palavra-nova', true);
}

window.onload = function () {
    preLoadStorage(palavras);
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        startGame();
    }
}

function resetGame() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

function restartGame() {
    document.location.reload();
}

function stop() {
    for (i = 1; i < 13; i++) {
        matarBoneco(i);
        console.log(i);
    }
    this.toggleScreen('container-btn', false);
    this.toggleScreen('reset-btn', false);
    this.toggleScreen('cancel-btn', false);
    this.toggleScreen('gameover-screen', true);
}

function win() {
    this.toggleScreen('container-btn', false);
    this.toggleScreen('reset-btn', false);
    this.toggleScreen('cancel-btn', false);
    this.toggleScreen('win-screen', true);
}

function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none';
    element.style.display = display;
}