const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", function () {
    const content = item.querySelector(".accordion-content");
    content.classList.toggle("active");

    accordionItems.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem
          .querySelector(".accordion-content")
          .classList.remove("active");
      }
    });
  });
});

const ggg = a => {
  const setobj = new Set(a);
  const yy = [...setobj];
  return yy;
};

console.log("", ggg([4, 3, 4, 4, 4, 2]));
