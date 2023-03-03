// task :
// 1. create a btn like "contact" btn called as "pro subscription" btn
// 2. add a item called "chinese" in the "recipes" section
// 3. add a card for recipes 
// 4. change the item name color to blue

// task 1

let newBtn = document.createElement("a");
newBtn.classList.add("btn");
newBtn.href = "./index.html";
newBtn.innerText = "pro subscription"

let getBtn = document.querySelector(".nav-links");
getBtn.nextElementSibling.appendChild(newBtn);

// task 2

let newItem = document.createElement("a");
newItem.innerText = "Chinese(7)";

let getItem = document.querySelector(".text-r");
getItem.nextElementSibling.appendChild(newItem);

// task 3

let newCard = document.createElement("div");
newCard.classList.add("card");

let newCarda = document.createElement("a");
newCarda.classList.add("recipe-text");

let newCardImg = document.createElement("img");
newCardImg.classList.add("recipe-img");
newCardImg.src = "./img/recipe-1.jpeg";

let newCardH5 = document.createElement("h5");
newCardH5.classList.add("recipe-name");
newCardH5.innerText = "New Chikken";

let newCardP = document.createElement("p");
newCardP.classList.add("recipe-disp");
newCardP.innerText = "Prep : 15min | Cook : 35min";

newCarda.appendChild(newCardImg);
newCarda.appendChild(newCardH5);
newCarda.appendChild(newCardP);

newCard.appendChild(newCarda);

document.querySelector(".recipe-gallery").appendChild(newCard);

// task 4

let recipeText = document.querySelectorAll(".recipe-text");
recipeText.forEach(element => {
    element.style.color = "blue";
});






