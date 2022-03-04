// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showme = document.querySelector(".showme");
console.log(showme);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector("#pillado");
console.log(h1);

// 1.3 Usa querySelector para mostrar por consola todos los p

const paragraph = document.querySelectorAll("p");

paragraph.forEach((paragraph) => {
  console.log(paragraph.textContent);
});

console.log("Cantidad de P " + paragraph.length);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemon = document.querySelectorAll(".pokemon");

pokemon.forEach((pokemon) => {
  console.log(pokemon.textContent);
});

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".

const testMe = document.querySelectorAll("[data-function='testMe']");

testMe.forEach((testMe) => {
  console.log(testMe);
});


// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

console.log('Mostrar el 3er span ' + testMe[3].textContent);
