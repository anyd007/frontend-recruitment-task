const openPopupBtn = document.querySelector(".hero__conteiner--btn");
const popupView = document.querySelector(".hide");
const counterInfo = document.querySelector(".hero__popup--alertInfo");
let count = localStorage.getItem("counter") || 0

const openPopup = (e) => {
  if (e.target.matches(".hero__conteiner--btn")) {
    count++
    localStorage.setItem("counter", count)
    let view = localStorage.getItem("counter")
    popupView.classList.remove("hide");
    counterInfo.textContent = `You have clicked ${view} times to related button.`;
  }
};

const closePopup = (e) => {
  if (
    e.target.matches(".hero__popup--icon") ||
    e.target.matches(".background")
  ) {
    popupView.classList.add("hide");
  }
};

document.addEventListener("click", openPopup);
document.addEventListener("click", closePopup);
