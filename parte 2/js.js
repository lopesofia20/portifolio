const fotos = ["eeeeeeeeeeeu - Copia.jpg", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.png", "bbbbbbbbbbbbbbbbbbbbbb.jpg"];
let indexAtual = 0;

function mudarFoto(direcao) {
    indexAtual += direcao;
    if (indexAtual < 0) indexAtual = fotos.length - 1;
    if (indexAtual >= fotos.length) indexAtual = 0;
    document.getElementById("fotoPerfil").src = fotos[indexAtual];
}