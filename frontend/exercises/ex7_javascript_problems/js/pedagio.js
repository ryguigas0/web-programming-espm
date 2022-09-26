function pedagio() {
  let inputDados1 = document.querySelector("#input-pedagio1").value;
  let inputDados2 = document.querySelector("#input-pedagio2").value;
  let output = document.querySelector("#output-pedagio");

  [comrpimentoEstrada, distEntrePedagios] = inputDados1
    .split(" ")
    .map((numStr) => parseInt(numStr));

  [custoKm, valorPedagio] = inputDados2
    .split(" ")
    .map((numStr) => parseInt(numStr));

  let quantPedagios = 0;

  if (comrpimentoEstrada % distEntrePedagios != 0) {
    quantPedagios = parseInt(comrpimentoEstrada / distEntrePedagios + 1);
  } else {
    quantPedagios = parseInt(comrpimentoEstrada / distEntrePedagios);
  }

  let total = quantPedagios * valorPedagio + comrpimentoEstrada * custoKm;

  output.textContent = total;
}
