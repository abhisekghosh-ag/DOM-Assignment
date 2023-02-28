## Assignment Two 

### task 1 : change the bg color of about section's heading and paragraph

![task 1](./task1Output.png)

>solution:-

```
let accordianHeading = document.querySelectorAll(".accordian h3");
let accordianPara = document.querySelectorAll(".accordian p");
accordianHeading.forEach((e) => {
  e.style.backgroundColor = "#dadaf8"
});
accordianPara.forEach((e) => {
  e.style.backgroundColor = "#eeeeff"
});
```

### task 2 : Replace the search's placeholder "search" to "Search My Project"

![task 2](./task2Output.png)

>solution:-

```
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
```
