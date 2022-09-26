function corrida() {
  let inputDados = document.querySelector("#input-corrida").value;
  let output = document.querySelector("#output-corrida");

  let inputDadosSplit = inputDados.split(" ");

  let correr = parseInt(inputDadosSplit[0]);
  let comprimento = parseInt(inputDadosSplit[1]);

  output.textContent = correr % comprimento;
}
