document.querySelector("#orcar").addEventListener("click", () => {
  let nome = document.querySelector("#nome").value;
  let raca = Number(document.querySelector("#racas").value);
  let valor = 0;
  alert(`Nome ${nome} e Raça ${raca}`);
  valor = CalcularServico() + raca;
  alert(`Valor da Raça ${raca} e o valor do Serviço ${valor}`)
  let pacote = CalcularPacote();
  alert(`Valor da Raça ${raca}, valor do Serviço ${valor} e o Valor do Pacote ${pacote}`);
});

function CalcularServico() {
  let servicos = document.querySelectorAll("input[name='servicos']");
  let qntd = servicos.length;
  let total = 0;

  for (i = 0; i < qntd; i++) {
    if (servicos[i].checked) {
      total += Number(servicos[i].value);
    }
  }
  console.log(total);
  return total;
}

function CalcularPacote() {
  let pacote = document.querySelectorAll("input[name='pacote']");
  let qntd = pacote.length;
  let total = 0;

  for (i=0; i< qntd; i++) {
    if (pacote[i].checked) {
      total =+ Number(pacote[i].value);
    }
  }

  console.log(total)
  return total
}

document.querySelector("#imprimir").addEventListener("click", () => {
  window.print()
})