document.addEventListener("DOMContentLoaded", () => {

```
const form = document.getElementById("form-contato");
const retorno = document.getElementById("retorno");

if (!form) {
    return;
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!form.checkValidity()) {

        form.reportValidity();

        return;
    }

    retorno.textContent =
        "Mensagem enviada com sucesso! " +
        "Obrigada por entrar em contato com a ESSENZA.";

    form.reset();

});
```

});

function comprarProduto(nome, preco) {

    const mensagem =
        "Olá! Gostaria de comprar o produto " +
        nome +
        " no valor de R$ " +
        preco +
        ".";

    alert(mensagem);

}