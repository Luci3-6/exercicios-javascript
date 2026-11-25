const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const nota3 = document.querySelector("#nota3");
const botao = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {

  // Verifica se os campos estão vazios
  if (
    nota1.value.trim() === "" ||
    nota2.value.trim() === "" ||
    nota3.value.trim() === ""
  ) {
    resultado.textContent = "Preencha todas as notas!";
    resultado.className = "reprovado";
    return;
  }

  // Converte os valores de string para número
  const n1 = Number(nota1.value);
  const n2 = Number(nota2.value);
  const n3 = Number(nota3.value);

  // Verifica se os valores são numéricos
  if (
    !Number.isFinite(n1) ||
    !Number.isFinite(n2) ||
    !Number.isFinite(n3)
  ) {
    resultado.textContent = "Digite apenas números válidos!";
    resultado.className = "reprovado";
    return;
  }

  // Calcula a média
  const media = (n1 + n2 + n3) / 3;

  // Verifica se foi aprovado ou reprovado
  if (media >= 7) {
    resultado.textContent = `Aprovado! Média: ${media.toFixed(2)}`;
    resultado.className = "aprovado";
  } else {
    resultado.textContent = `Reprovado! Média: ${media.toFixed(2)}`;
    resultado.className = "reprovado";
  }
});