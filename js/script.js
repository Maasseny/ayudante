let entrada = document.querySelector("#entrada")
let resultado = document.querySelector("#resultado")
entrada.addEventListener("keyup", function (evento){
console.log("mira soy el evento",evento.target.value);
resultado.textContent = evento.target.value
})