// TASK :
// 1. change logo img to ineuron logo img
// 2. change the amount for subsription "$4/Month" to "$10/Month"
// 3. add a linkedin logo footer_social section 

// task 1

let changeImg = document.querySelector("header>img");
changeImg.src = "./assets/ineuron-logo.png";

// task 2

let changeAmount = document.querySelector(".app_price");
changeAmount.innerHTML = "<span>$10</span> / month";

// task 3 

let linkedin = document.createElement("div");
linkedin.classList.add("footer_social_ico");
let linkedinI = document.createElement("i");
linkedinI.classList.add("fa-brands");
linkedinI.classList.add("fa-linkedin");

linkedin.appendChild(linkedinI);
document.querySelector(".footer_social").appendChild(linkedin);
