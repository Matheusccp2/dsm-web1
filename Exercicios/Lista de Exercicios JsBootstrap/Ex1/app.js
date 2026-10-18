function Limpar() {
  document.querySelector("form").reset();
}

document.getElementById("btn-limpar").addEventListener("click", Limpar());

document.getElementById("btn-calcular").addEventListener("click", (event) => {
  event.preventDefault()
  const nome = document.getElementById("nomeAluno").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const selectPlano = document.getElementById("plano");
  const valorPlano = parseFloat(selectPlano.value);
  const nomePlano = selectPlano.options[selectPlano.selectedIndex].text;
  const form = document.querySelector("form");

  if (!form.reportValidity()) {
    return;
  }

  // Soma dos adicionais
  let totalAdicionais = 0;
  document.querySelectorAll(".check:checked").forEach((check) => {
    totalAdicionais += parseFloat(check.value);
  });

  // Subtotal e desconto de 10% para 60 anos ou mais
  const subtotal = valorPlano + totalAdicionais;
  const desconto = idade >= 60 ? subtotal * 0.1 : 0;
  const valorFinal = subtotal - desconto;

  const formatar = (v) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  alert(
    `Aluno: ${nome}\n` +
      `Plano: ${nomePlano} (${formatar(valorPlano)})\n` +
      `Adicionais: ${formatar(totalAdicionais)}\n` +
      `Desconto: ${formatar(desconto)}\n` +
      `Valor final da mensalidade: ${formatar(valorFinal)}`,
  );

  Limpar();
});
