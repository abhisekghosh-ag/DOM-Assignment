// task 1

let removeLanguages = document.querySelectorAll(".main__languages  a");
removeLanguages.forEach((element) => {
  if (element.innerText.includes("2.0")) {
    element.style.display = "none";
  }
});
// // task 2
// let inputText = document.querySelector("input");
// inputText.disabled = false;
document.querySelector(".main__form-input").placeholder = "iNeuron";
let submitBtn = document.querySelector(".main__form-btn");
submitBtn.disabled = false;
submitBtn.addEventListener("click",  () =>{
  for (let i = 0; i < removeLanguages.length; i++) {
    removeLanguages[i].style.display = "inline-block";
  }
});
