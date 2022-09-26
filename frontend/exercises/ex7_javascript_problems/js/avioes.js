function avioes() {
  let inputDados = document.querySelector("#input-avioes").value;
  let output = document.querySelector("#output-avioes");

  let [quantCompetidores, quantFolhas, folhasPerCompetidor] = inputDados
    .split(" ")
    .map((numStr) => parseInt(numStr));

  let suficiente = (quantCompetidores * folhasPerCompetidor) <= quantFolhas;

  output.textContent = suficiente ? "S" : "N";
}
