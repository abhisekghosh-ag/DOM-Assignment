# DOM-Assignment
### before any changes the project was look like this :-

![Before](./assets/before.jpg)

## Assignment One 

### task 1: add "Hire Me" in the navbar after "projects"
![task1](./firstAssignmentImage/task1Output.png)

>solution:-
```
let newElement = document.createElement("li");
newElement.innerHTML ="<a>Hire Me</a>"
document.querySelector("header nav ul").appendChild(newElement);
```

### task 2: Replace the search's placeholder "search" to "Search My Project"
![task2](./firstAssignmentImage/task2Output.png)

>solution:-
```
let search = document.querySelector(".search-field input");
search.placeholder = "Search My Project"
```

### task 3: Manipulating hero section's details
![task3](./firstAssignmentImage/task3Output.png)

>solution:-
```
let details = document.querySelector(".hero-left-section p span:last-child");
details.innerText = "iNeuron Intelligence Pvt Ltd"
```

### task 4: Change the profile picture

![task4](./firstAssignmentImage/task4Output.png)

>solution:-
```
let profile = document.querySelector(".hero-right-section img");
profile.src = "./assets/pic.jpeg"

```

### task 5: Add a "Support Me" button after "Chat With Me" button

![task5](./firstAssignmentImage/task5Output.png)

>solution:-
```
let supportBtn = document.createElement("button");
supportBtn.innerText = "Support Me";
document.querySelector(".hero-right-section-btns").appendChild(supportBtn);
```


## Assignment Two 

### task 1 : change the bg color of about section's heading and paragraph

![task 1](./secondAssignmentImage/task1Output.png)

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

### task 2 : add a skills section and add content on it. 

![task 2](./secondAssignmentImage/task2Output.png)

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

## Assignment Three
>before :-

![before](./assets/before3.jpg)

### task : change the placeholder value 

![task](./thirdAssignmentImage/task1Output.png)

>solution:-

```
//for the left section
let enterName = document.querySelector(".enterName");
let enterMail = document.querySelector(".enterMail");
let enterMessage = document.querySelector(".enterMessage");

enterName.placeholder = "FSJS 2.0"
enterMail.placeholder = "fsjs@ineuron.ai"
enterMessage.placeholder = "Hello World"



//for the right section
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userMessage = document.querySelector(".userMessage");

userName.placeholder = "FSJS 2.0"
userEmail.placeholder = "fsjs@ineuron.ai"
userMessage.placeholder = "Hello World"
```

