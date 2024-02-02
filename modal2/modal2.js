import { phones } from "./data.js";
const section = document.querySelector(".section");
const sidebarlist = document.querySelector(".sidebarlist");
const input = document.querySelector("input");
const sum = document.getElementById("summ");
const deletex = document.getElementById("delete");

let summ = null;

const addItem = e => {
  const data = e.target.dataset.price;

  summ += parseInt(data);
  sum.innerText = summ;
};

const deleteSumm = () => {
  summ = 0;
  sum.innerText = null;
};

deletex.addEventListener("click", deleteSumm);

const cartPattern = phone => {
  return `  
          <div class="photo"></div>
           <div class="category">${phone.category}</div>
          <h3 class="name">name: ${phone.name}</h3>
          <p class="description">${phone.description}</p>
          <div class="price">${phone.price}</div>
          
          <button data-price = ${phone.price} class="but">Dodaj do koszyka</button>
        `;
};

const createCarts = list => {
  section.innerHTML = "";
  list.forEach(phone => {
    const cart = document.createElement("div");
    cart.className = `cart ${phone.sale ? "on-sale" : ""}`;
    cart.innerHTML = cartPattern(phone);
    section.append(cart);
  });
  const btnsCart = document.querySelectorAll("button");
  btnsCart?.forEach(btn => {
    btn.addEventListener("click", addItem);
  });
};

const search = e => {
  const searchCategory = e.target.dataset.category;

  const filtered = phones.filter(({ category }) => {
    if (searchCategory === "wszystkie") {
      return category;
    }
    return category === searchCategory;
  });

  return createCarts(filtered);
};

const createlist = list => {
  const categories = new Set();

  list.forEach(item => {
    categories.add(item.category);
  });

  const categoriesArray = ["wszystkie", ...categories];

  categoriesArray.forEach(category => {
    const li = document.createElement("li");
    li.innerText = category;
    li.setAttribute("data-category", category);
    li.addEventListener("click", search);
    sidebarlist.append(li);
  });
};

const giveInput = e => {
  const inputValue = e.target.value;
  const serchPhone = phones.filter(({ name }) => {
    return name.includes(inputValue);
  });
  return createCarts(serchPhone);
};

input.addEventListener("input", giveInput);

const init = list => {
  createCarts(list);
  createlist(list);
};

document.onload = init(phones);


let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);