const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const range = document.querySelector(".inputRange");
const text = document.querySelector(".text");
const select = document.querySelector(".select");
const sesctionSecond = document.querySelector(".sesctionSecond");

const squaresContainer = document.querySelector(".squaresContainer");
const squares = document.querySelectorAll(".square");

range.addEventListener("input", () => {
  const rangeValue = range.value;
  const selectValue = select.Value;
  text.style.fontSize = `${rangeValue}px`;
  body.style.backgroundColor = ` rgba(255, 0, 0, 0.${rangeValue})`;
});

select.addEventListener("input", () => {
  const selectValue = select.value;
  text.style.fontFamily = selectValue;
});

btn.addEventListener("click", () => {
  sesctionSecond.scrollIntoView({ behavior: "smooth" });
});

// console.log("", square);
// mouseover;

squares.forEach(square => {
  square.addEventListener("mouseover", () => {
    const div = document.createElement("div");
    const text = square.dataset.text;
    div.className = "tooltip";
    div.textContent = text;
    square.append(div);
  });
});

squares.forEach(square => {
  square.addEventListener("mouseout", () => {
    document.querySelector(".tooltip").remove();
  });
});

const yy = first => {
  const xx = [...first];

  const bb = xx.map(x => +x);

  const isNan = bb.includes(NaN);
  const length = first.length;

  const result = !isNan && (length === 4 || length === 6);

  return result;
};
