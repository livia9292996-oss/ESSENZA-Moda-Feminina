// 1. Validação do formulário (contato.html)
const formulario = document.getElementById("form-contato");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const retorno = document.getElementById("retorno");

        if (nome === "" || email === "" || mensagem === "") {
            retorno.textContent = "Por favor, preencha todos os campos.";
            retorno.style.color = "#e57373";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            retorno.textContent = "Digite um e-mail válido (com @ e .).";
            retorno.style.color = "#e57373";
            return;
        }

        retorno.textContent = "Obrigada pelo contato, " + nome + "! Responderemos em breve.";
        retorno.style.color = "#c9a24d";
        formulario.reset();
    });
}

// 2. Botão "Voltar ao topo" (index.html)
const botaoTopo = document.getElementById("botao-topo");

if (botaoTopo) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }
    });

    botaoTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 3. Carrossel de imagens (index.html)
const slides = document.querySelectorAll(".carrossel .slide");

if (slides.length > 0) {
    let atual = 0;

    setInterval(function () {
        slides[atual].classList.remove("ativo");
        atual = (atual + 1) % slides.length;
        slides[atual].classList.add("ativo");
    }, 4000);
}