const darkModeBtn = document.querySelector(".hero__darkMode");
const darkModeInfo = document.querySelector(".hero_darkModeInfo")

let theme = localStorage.getItem("theme", "dark") || "light"
let swith = localStorage.getItem("swith", "active") || "disactive"
let swithInfo = localStorage.getItem("swithInfo", "Eye protection") || "Normaly theme"

darkModeBtn.addEventListener("click", ()=>{
    if(theme === "dark"){
        document.querySelector("body").classList.remove("dark")
        darkModeBtn.classList.remove("active");
        theme = "light"
        swith = "disactive"
        swithInfo ="Eye protection"
        darkModeInfo.textContent = swithInfo
    }
    else{
        document.querySelector("body").classList.add("dark")
        darkModeBtn.classList.add("active")
        theme = "dark"
        swith = "active"
        swithInfo = "Normaly theme"
        darkModeInfo.textContent = swithInfo
    }
    localStorage.setItem("theme", theme)
    localStorage.setItem("swith", swith)
    localStorage.setItem("swithInfo", swithInfo)
});

if(theme === "dark"){
    document.querySelector("body").classList.add("dark");
    darkModeBtn.classList.add("active");
    darkModeInfo.textContent = "Normaly theme"
}






