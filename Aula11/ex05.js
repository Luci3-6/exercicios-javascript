const campo = document.querySelector("#item");
const botao = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");

botao.addEventListener("click", (evento) => {

    const texto = campo.value.trim();

    // Verifica se está vazio
    if (texto === "") {
        alert("Digite alguma coisa!");
        return;
    }

    // Cria um novo li
    const novoItem = document.createElement("li");

    // Adiciona o texto ao li
    novoItem.textContent = texto;

    // Coloca o li dentro da lista
    lista.appendChild(novoItem);

    // Limpa o campo
    campo.value = "";

    // Volta o cursor para o campo
    campo.focus();
});