const fotos = ["eeeeeeeeeeeu - Copia.jpg", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.png", "bbbbbbbbbbbbbbbbbbbbbb.jpg"];
let indexAtual = 0;

function mudarFoto(direcao) {
    indexAtual += direcao;
    if (indexAtual < 0) indexAtual = fotos.length - 1;
    if (indexAtual >= fotos.length) indexAtual = 0;
    document.getElementById("fotoPerfil").src = fotos[indexAtual];
}

let ucs = [
    "Gestão e Qualidade de Software",
    "Usabilidade, Desenvolvimento Web, mobile e Jogos",
    "Programação de soluções computacionais",
    "Modelagem de Software",
    "Vida e Carreira",
    "Ambientes computacionais e conectividade",
    "Sistemas computacionais e segurança"
];

function renderizarUCs() {
    const lista = document.getElementById("listaUcsOrdenavel");
    lista.innerHTML = "";
    ucs.forEach((uc, index) => {
        const li = document.createElement("li");
        li.textContent = uc;

        const upBtn = document.createElement("button");
        upBtn.textContent = "⬆️";
        upBtn.onclick = () => moverUC(index, -1);

        const downBtn = document.createElement("button");
        downBtn.textContent = "⬇️";
        downBtn.onclick = () => moverUC(index, 1);

        li.appendChild(upBtn);
        li.appendChild(downBtn);
        lista.appendChild(li);
    });
}

function adicionarUC() {
    const novaUC = prompt("Digite o nome da nova UC:");
    if (novaUC) {
        ucs.push(novaUC);
        renderizarUCs();
    }
}

function moverUC(index, direcao) {
    const novoIndex = index + direcao;
    if (novoIndex >= 0 && novoIndex < ucs.length) {
        [ucs[index], ucs[novoIndex]] = [ucs[novoIndex], ucs[index]];
        renderizarUCs();
    }
}

// CPF: ddd.ddd.ddd-dd
function validarCPF() {
    const cpf = document.getElementById("cpf").value;
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    document.getElementById("cpfErro").textContent = 
        regex.test(cpf) ? "" : "CPF inválido (use 000.000.000-00)";
}

function validarEmail() {
    const email = document.getElementById("emailValidar").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById("emailErro").textContent = 
        regex.test(email) ? "" : "E-mail inválido";
}

function atualizarDescricao() {
    const nova = document.getElementById("novaDescricao").value.trim();
    if (nova) {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = nova;
        document.querySelector(".descricao").appendChild(paragrafo);
        document.getElementById("novaDescricao").value = "";
    }
}

// Inicializa UCs
renderizarUCs();
