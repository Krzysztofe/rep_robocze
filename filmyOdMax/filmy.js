// const form = document.querySelector("form");
// const btn = document.getElementById("submit");
// const ul = document.querySelector("ul");

// const mouvies = [];

// const render = () => {
//   ul.innerHTML = "";
//   mouvies.forEach(mouvie => {
//     const li = document.createElement("li");
//     li.innerText = mouvie.info.title;

//     mouvies.forEach(mouvie => {});

//     ul.append(li);
//   });
// };

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const title = document.getElementById("title").value;
//   const name = document.getElementById("name").value;
//   const values = document.getElementById("values").value;

//   const mouvie = {
//     info: {
//       title,
//       [name]: values,
//     },

//     id: Math.random(),
//   };

//   mouvies.push(mouvie);
//   render();
// });



const toDo = document.getElementById("toDo");

const deleteBtn = id => {
  document.getElementById(id).remove();
};

const print = text => {
  const ul = document.getElementById("list-toDo");

  const li = document.createElement("li");
  li.innerText = text;
  li.id = Math.random();

  const btn = document.createElement("button");
  btn.innerText = "usuń";
  btn.addEventListener("click", () => deleteBtn(li.id));

  ul.append(li);
  li.append(btn);
};

const addToDo = e => {
  e.preventDefault();
  const infoValue = document.getElementById("info").value;

  print(infoValue);
  document.getElementById("info").value = "";
};

toDo.addEventListener("submit", addToDo);
