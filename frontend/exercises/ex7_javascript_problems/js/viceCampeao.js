function viceCampeao() {
  let inputDados = document.querySelector("#input-vice-campeao").value;
  let output = document.querySelector("#output-vice-campeao");

  let inputDadosSplit = inputDados.split(" ");

  let a = parseInt(inputDadosSplit[0]);
  let b = parseInt(inputDadosSplit[1]);
  let c = parseInt(inputDadosSplit[2]);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return;
  }


  if (b < a) {
    let aux = a;
    a = b;
    b = aux;
  }

  if (c < a) {
    let aux = a;
    a = c;
    c = aux;
  }

  if (c < b) {
    let aux = c;
    c = b;
    b = aux;
  }

  output.textContent = b;
}
