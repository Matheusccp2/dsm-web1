document.getElementById("btn-limpar").addEventListener("click", () => {
  document.querySelector("form").reset();
});

document.getElementById("btn-calcular").addEventListener("click", () => {
  const form = document.querySelector("form");
  if (!form.reportValidity()) {
    return;
  }

  const nome = document.getElementById("nomeHospede").value.trim();
  const hospedes = parseInt(document.getElementById("hospedes").value);
  const entrada = new Date(document.getElementById("dataEntrada").value);
  const saida = new Date(document.getElementById("dataSaida").value);

  // Saída precisa ser posterior à entrada
  if (saida <= entrada) {
    alert("A data de saída deve ser posterior à data de entrada.");
    return;
  }

  // Diárias = diferença em dias entre as datas
  const msPorDia = 1000 * 60 * 60 * 24;
  const diarias = Math.round((saida - entrada) / msPorDia);

  // Preço do quarto (value do option) x diárias
  const selectPlano = document.getElementById("plano");
  const precoDiaria = parseFloat(selectPlano.value);
  const nomeQuarto = selectPlano.options[selectPlano.selectedIndex].text;
  const totalQuarto = precoDiaria * diarias;

  // Soma dos opcionais marcados
  let totalOpcionais = 0;
  document.querySelectorAll(".check:checked").forEach((check) => {
    totalOpcionais += parseFloat(check.value);
  });

  const total = totalQuarto + totalOpcionais;
  const formatar = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  alert(
    `Hóspede: ${nome} (${hospedes} ${hospedes === 1 ? "pessoa" : "pessoas"})\n` +
      `Quarto: ${nomeQuarto} (${formatar(precoDiaria)} por diária)\n` +
      `Diárias: ${diarias}\n` +
      `Opcionais: ${formatar(totalOpcionais)}\n` +
      `Total da reserva: ${formatar(total)}`,
  );
});
