let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// assignment two task 1 : change the bg color of about section's heading and paragraph

let accordianHeading = document.querySelectorAll(".accordian h3");
let accordianPara = document.querySelectorAll(".accordian p");
accordianHeading.forEach((e) => {
  e.style.backgroundColor = "#dadaf8"
});
accordianPara.forEach((e) => {
  e.style.backgroundColor = "#eeeeff"
});


// assignment two task 2 : add a skills section and add content on it.



let skillsdiv = document.createElement("div");

let skillsh3 = document.createElement("h3");
skillsh3.innerText = "Skills";
skillsh3.style.backgroundColor = "#dadaf8";

let skillspara = document.createElement("p");
skillspara.innerText = "I passes a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the github."
skillspara.style.backgroundColor = "#eeeeff"

skillsdiv.appendChild(skillsh3);
skillsdiv.appendChild(skillspara);

skillsdiv.classList.add("accordian");
skillsdiv.addEventListener("click", function () {
  let para = this.querySelector("p");
  if (para.style.display === "block") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
});
document.querySelector(".accordian-wrapper").appendChild(skillsdiv);