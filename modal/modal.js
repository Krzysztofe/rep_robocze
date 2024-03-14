const [body, modalContainer] = ["body", "modalContainer"].map(item => {
  return document.querySelector(item);
});

const [modalFirst, modalSecond] = ["modalFirst", "modalSecond"].map(item => {
  return document.getElementById(item);
});

const modal = `
<div class="modal" tabindex = "10">
        <div class="modal__header">tytul</div>
        <i class="fa-solid fa-xmark icon-xmark modal__icon" ></i>
        <div class="modal__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          laborum delectus ratione ipsam quod! Sequi, illum tenetur velit
        </div>
        <div class="btnContainer">
          <button class="btn">zatwierdz</button>
          <button class="btn">stop</button>
        </div>
      </div>`;

const createModal = () => {
  const modalContainer = document.createElement("div");
  modalContainer.classList = "modalContainer";
  modalContainer.innerHTML = modal;
  body.append(modalContainer);

  const modal__icon = document.querySelector(".modal__icon");
  const modalActive = document.querySelector(".modal");
  modalActive.focus();

  modal__icon.addEventListener("click", removeModal);
  modalContainer.addEventListener("click", removeModal);
  modalActive.addEventListener("keydown", removeModal);

  modalActive.style.opacity = "1";
  modalActive.style.transform = "translate(0px)";
  modalActive.style.transition = "0.5s";

  body.style.overflow = "hidden";
};

const removeModal = e => {
  if (
    e?.target.classList.value === "modalContainer" ||
    e?.target.classList.value === "fa-solid fa-xmark icon-xmark modal__icon" ||
    e.key === "Escape"
  ) {
    document.querySelector(".modalContainer")?.remove();
    body.style.overflow = "auto";
  }
  // e.stopPropagation();
  document.querySelector(".modalContainer")?.remove();
  body.style.overflow = "auto";

};

modalFirst.addEventListener("click", createModal);
