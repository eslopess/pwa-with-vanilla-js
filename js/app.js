const container = document.querySelector(".container");
const coffees = [
  {
    name: "TELA DE LOGIN",
    image: "images/login.jpg"
  },
  {
    name: "CheckList Automóvel",
    image: "images/automovel.jpg"
  },
  {
    name: "CheckList Motocicleta",
    image: "images/moto.jpg"
  },
  {
    name: "CheckList Caminhão",
    image: "images/caminhao.jpg"
  },
  {
    name: " CheckList Motor Home",
    image: "images/motorhome.jpg"
  },
  {
    name: " Cadastro de Cliente",
    image: "images/cliente.jpg"
  },
  {
    name: "Cadastro de Veículo",
    image: "images/cadastroVeiculo.jpg"
  },
  {
    name: "Incluir Fotos",
    image: "images/foto.jpg"
  },
  {
    name: "Emissão do Laudo",
    image: "images/laudo.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
