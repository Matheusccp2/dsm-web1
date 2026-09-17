function calcularAumentoSalario() {
  event.preventDefault();
  let salario = parseFloat(document.getElementById("salario").value);
  let aumento = parseFloat(document.getElementById("aumento").value);

  let resultado = salario + salario * (aumento / 100);

  const p = document.createElement("p");
  const section = document.getElementById("exercicio01");
  p.textContent = `Resultado: R$ ${resultado.toFixed(2)}`;
  section.appendChild(p);
}

function calcularAreaTriangulo() {
  event.preventDefault();
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let areaTriangulo = (base * altura) / 2;

  let resposta = document.getElementById("resposta");
  resposta.value = areaTriangulo;
}

function calcularMediaPonderada() {
  event.preventDefault();
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);

  let media = (nota1 * 30 + nota2 * 70) / 100;

  const p = document.createElement("p");
  const section = document.getElementById("exercicio03");
  p.textContent = `Resultado: ${media}`;
  section.appendChild(p);
}

function calcularTempoDeVida() {
  event.preventDefault();
  let anoNascimento = Number(document.getElementById("anoNascimento").value);

  let anoAtual = new Date().getFullYear();

  let anos = anoAtual - anoNascimento;
  let meses = anos * 12;
  let dias = anos * 365;
  let horas = dias * 24;
  let minutos = horas * 60;
  let semanas = dias / 7;

  let idadeEm2050 = 2050 - anoNascimento;

  console.log("===== RESULTADO =====");
  console.log("Anos:", anos);
  console.log("Meses:", meses);
  console.log("Dias:", dias);
  console.log("Horas:", horas);
  console.log("Minutos:", minutos);
  console.log("Semanas:", semanas.toFixed(0));
  console.log("Idade em 2050:", idadeEm2050, "anos");
}

function calcularConsumoCombustivel() {
  event.preventDefault();

  let distancia = Number(document.getElementById("distancia").value);
  let volume = Number(document.getElementById("volume").value);

  let consumoMedio = distancia / volume;

  const p = document.createElement("p");
  const section = document.getElementById("exercicio05");
  p.textContent = `Resultado: ${consumoMedio}km/l`;
  section.appendChild(p);
}

function calculoTrabalhista() {
  event.preventDefault();

  let valorHora = parseFloat(document.getElementById("valorHora").value);
  let horasTrabalhadas = parseFloat(
    document.getElementById("horasTrabalhadas").value,
  );
  let refeicoes = parseInt(document.getElementById("refeicoes").value);

  let horasNormais = 40;
  let horasExtras = horasTrabalhadas - horasNormais;

  let salarioNormal = horasNormais * valorHora;
  let salarioExtra = horasExtras * (valorHora * 3);

  let salarioBruto = salarioNormal + salarioExtra;

  let descontoRefeicao = refeicoes * 1.5;

  let salarioLiquido = salarioBruto - descontoRefeicao;

  const p = document.createElement("p");
  const section = document.getElementById("exercicio06");

  p.innerHTML = `
        Salário bruto: R$ ${salarioBruto.toFixed(2)} <br>
        Desconto da refeição: R$ ${descontoRefeicao.toFixed(2)} <br>
        Salário líquido: R$ ${salarioLiquido.toFixed(2)}
    `;

  section.appendChild(p);
}

function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 100) + 1;

    const p = document.getElementById("resultadoNumero");

    if (numero % 2 === 0) {
        p.textContent = `O número ${numero} é PAR.`;
    } else {
        p.textContent = `O número ${numero} é ÍMPAR.`;
    }
}

numeroAleatorio();