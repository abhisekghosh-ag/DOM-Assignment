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


// assignment two task 2 : Change the Hobbies section 

let hobbies = document.querySelectorAll(".accordian p");
hobbiesText = hobbies[hobbies.length-1];
hobbiesText.innerText = "I passes a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the github."
