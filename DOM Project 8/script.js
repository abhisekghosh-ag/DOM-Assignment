// task 1

let aside = document.querySelector("aside"); //target aside
aside.style.border = "5px solid red"; // create red border

// creating a new heading and put some content on it just for test the scrolling
let hr = document.createElement("hr"); // create horizontial line
hr.classList.add("hr-line"); // add some css
// creating Heading
let h2 = document.createElement("h2");
h2.classList.add("new-head");
h2.innerText = "This is my custom heading";
let p = document.createElement("p"); // create paragraph for some content
p.classList.add("new-p");
p.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, odit ab at voluptate rem iure!";
// appending these element to aside
aside.appendChild(hr);
aside.appendChild(h2);
aside.appendChild(p);
// adding scroll to display appended items
aside.style.overflowY = "scroll";


//  task 2 : make bg none

document.querySelector("body").style.background = "none";

// task 3 : make toggler working

let toggleBtn = document.querySelector(".navbar-toggler");
toggleBtn.addEventListener("click", () =>{
    let targetToggle = document.querySelector("#navbarTogglerDemo01");
    if (targetToggle.classList.contains("collapse")) {
        targetToggle.classList.remove("collapse");
    } else {
        targetToggle.classList.add("collapse");
    }
});