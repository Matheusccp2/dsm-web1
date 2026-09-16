function mostrarCampos() {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;
  console.log(`Tá funcionando\nNome: ${nome}\nSenha: ${senha}`);
}

function Limpar() {
  document.getElementById("formCadastroCliente").reset();
  document.getElementById("resultado").innerHTML = "";
}

function Somar() {
  event.preventDefault();

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = num1 + num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;

  console.log(resultado);
}
function Subtrair() {
  event.preventDefault();

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = num1 - num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;

  console.log(resultado);
}
function Multiplicar() {
  event.preventDefault();

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = num1 * num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;

  console.log(resultado);
}
function Dividir() {
  event.preventDefault();

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = num1 / num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;

  console.log(resultado);
}
