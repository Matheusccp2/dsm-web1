document.querySelector("#orcar").addEventListener("click", () => {
  let nome = document.querySelector("#nome").value;
  let raca = document.querySelector("#racas").value;
  let pacote = document.querySelector(
    'input[name="radioDefault"]:checked',
  ).value;
  let checks = document.querySelectorAll(".form-check-input:checked");

  checks.forEach((check) => {
    console.log(check.value);
  });

  console.log(nome, raca, pacote, checks);
});

document.querySelector("#racas").addEventListener("change", Orcamento());
