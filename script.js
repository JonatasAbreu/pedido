function mudarPosicao() {
    // Seleciona o elemento
    var not = document.getElementById('elemento1')


    // Gera novas coordenadas aleatórias para a posição
    var novaPosicaoTop = Math.floor(Math.random() * window.innerHeight) - 150;
    var novaPosicaoLeft = Math.floor(Math.random() * window.innerWidth) - 150;

    // Define a nova posição do elemento
    not.style.marginTop = novaPosicaoTop + "px";
    not.style.marginLeft = novaPosicaoLeft + "px";

}
