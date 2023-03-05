## DOM ASSIGNMENT 7

### Here we have two task to do as follows :

>BEFORE (TASK 1) :-
![before](./assets/ass7.1-before.png)

>HAVE TO DO (TASK 1) :-
![after](./assets/ass7.1-after.png)

>BEFORE (TASK 2) :-
![before](./assets/ass7.1-before.png)

>HAVE TO DO (TASK 2) :-
![after](./assets/ass7.1-after.png)

> solution of TASK 1 :

```
// task 1

let removeLanguages = document.querySelectorAll(".main__languages  a");
removeLanguages.forEach((element) => {
  if (element.innerText.includes("2.0")) {
    element.style.display = "none";
  }
});
```

> solution of TASK 2 :

```
// // task 2
// let inputText = document.querySelector("input");
// inputText.disabled = false;
document.querySelector(".main__form-input").placeholder = "iNeuron";
let submitBtn = document.querySelector(".main__form-btn");
submitBtn.disabled = false;
submitBtn.addEventListener("click", () => {
  for (let i = 0; i < removeLanguages.length; i++) {
    removeLanguages[i].style.display = "inline-block";
  }
});
```