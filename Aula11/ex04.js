const texto = document.querySelector("#texto");
const contador = document.querySelector("#contador");

texto.addEventListener("input", () => {
    const quantidade = texto.value.length;

    // Atualiza o contador
    contador.textContent = `${quantidade}/140 caracteres`;

    // Guard clause: verifica se ultrapassou o limite
    if (quantidade > 140) {
        contador.className = "reprovado";
        return;
    }

    // Caminho feliz: dentro do limite
    contador.className = "aprovado";
});