function ex1Calcular() {
  let a = parseInt(document.querySelector("#num-a").value);
  let b = parseInt(document.querySelector("#num-b").value);
  let resultado;

  if (a >= b) {
    resultado = a - b;
  } else {
    resultado = b - a;
  }

  if (isNaN(resultado)) {
    resultado = "Digite números inteiros";
  }

  document.querySelector("#resultado").textContent =
    "A diferença entre o maior e o menor é: " + resultado;
}
