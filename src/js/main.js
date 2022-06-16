import "./darkMode.js"

const popupView = document.querySelector(".hide");
const counterInfo = document.querySelector(".hero__popup--alertInfo");
const resetBtn = document.querySelector("#resetPopupBtn");

let count = localStorage.getItem("counter") || 0;
let btnReset = localStorage.getItem("btnReset", "reseter") || "show"

const openPopup = (e) => {
  if (e.target.matches("#openPopupBtn")) {
    count++;
    popupView.classList.remove("hide");
    counterInfo.textContent = `You have clicked ${count} times to related button.`;
    count >= 6 ? btnReset = "show" : btnReset = "reseter"
  
    if(btnReset === "show"){
      btnReset = "reseter"
      resetBtn.classList.remove("reset");
    }
    else{
      btnReset = "show"
      resetBtn.classList.add("reset");
    }
}
      localStorage.setItem("btnReset", btnReset);
      localStorage.setItem("counter", count);
}
if(btnReset === "reseter"){
  resetBtn.classList.remove("reset")
};

const closePopup = (e) => {
  if (e.target.matches(".hero__popup--icon") || e.target.matches(".background")){
    popupView.classList.add("hide");

  }
};

const resetPopup = e =>{
          if(e.target.matches("#resetPopupBtn")){
            localStorage.removeItem("counter");
            localStorage.removeItem("btnReset")
            count = 0;
            btnReset = "show"
            resetBtn.classList.add("reset")
            alert("Your counter was restated");
          }
};

document.addEventListener("click", openPopup);
document.addEventListener("click", closePopup);
document.addEventListener("click", resetPopup);
