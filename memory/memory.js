const colors = [
  "red",
  "blue",
  "yellow",
  "yellowgreen",
  "grey",
  "green",
  "greenyellow",
  "orange",
  "black",
  "purple",
  "violet",
  "firebrick",
  "aqua",
  "lightblue",
  "lightslategray",
  "gold",
  "saddlebrown",
  "burlywood",
];

let carts = document.querySelectorAll("div");
carts = [...carts];

const addColor = function (e) {
  console.log("", this);

  const div = this;
  div.classList.add("hidden");

  carts.forEach(cart => {
    if (e.target === cart.classList) {
      const randomPosition = Math.floor(Math.random() * carts.length);
      cart.classList.add(colors[randomPosition]);

      colors.splice(randomPosition, 1);
    }

    // setTimeout(() => {
    //   cart.classList.add("hidden")
    // }, 2000);
  });

  // setTimeout(() => {
  //   carts.forEach(cart => {
  //     cart.classList.add("hidden");
  //   });
  // }, 2000);
};

// addColor()
carts.forEach(cart => {
  cart.addEventListener("click", addColor);
});

class Ala {
  constructor() {
    this.init();
  }
  init() {
    console.log("ooo");
  }
}

const tt = new Ala