window.onload = function () {
  createDiv();
  createDivP(6);
  insertP("Wubba Lubba dub dub");
  createUl(apps);
  removeClass();
  insertNewP();
  insertNewPTwo();
};

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

const createDiv = () => {
  // 2.1 Inserta dinamicamente en un html un div vacio con javascript.

  let newDiv = document.createElement("div");
  let newTextD = document.createTextNode("Es el DIV 1");
  newDiv.appendChild(newTextD);
  document.body.insertBefore(newDiv, null);

  // 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
  let newDiv2 = document.createElement("div");
  //let newTextD2 = document.createTextNode("Es un DIV con un P");
  let newParagraph = document.createElement("p");
  let newTextP = document.createTextNode("Este es un parrafo dentro del DIV 1");

  newParagraph.appendChild(newTextP);
  newDiv2.appendChild(newParagraph);

  document.body.insertBefore(newDiv2, newDiv);
};

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const createDivP = (number) => {
  let newDiv = document.createElement("div");
  let newTextD = document.createTextNode("Es el DIV 2");

  newDiv.appendChild(newTextD);

  for (let i = 0; i < number; i++) {
    let newParagraph = document.createElement("p");
    let newTextP = document.createTextNode("Soy un párrafo dinámico! " + i);
    newParagraph.appendChild(newTextP);
    newDiv.appendChild(newParagraph);
  }

  document.body.appendChild(newDiv, null);
};

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const insertP = (text) => {
  let textH2 = document.querySelector("h2");
  textH2.textContent = text;
};

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const createUl = (array) => {
  let newUl = document.createElement("ul");
  array.forEach((element) => {
    let newLi = document.createElement("li");
    let newContnetLi = document.createTextNode(element);
    newLi.appendChild(newContnetLi);
    newUl.appendChild(newLi);
  });

  document.body.appendChild(newUl);
};

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

function removeClass() {
  let elements = document.getElementsByClassName("fn-remove-me");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const insertNewP = () => {
  let element = document.querySelectorAll("div");
  const newP = document.createElement("p");

  const firtsDiv = element[1];
  newP.textContent = "Voy en medio";
  firtsDiv.insertAdjacentElement("beforebegin", newP);
};

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertNewPTwo = () => {
  let elements = document.getElementsByClassName("fn-insert-here");

  console.log(elements);
  for (const element of elements) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Voy en medio!";
    element.insertAdjacentElement("beforeend", newParagraph);
  }
};
