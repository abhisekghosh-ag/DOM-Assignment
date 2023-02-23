//here i have to completed all the given task 

//task 1: add "Hire Me" in the navbar after "projects"

let newElement = document.createElement("li");
newElement.innerHTML ="<a>Hire Me</a>"
document.querySelector("header nav ul").appendChild(newElement);

//task 2: Replace the search's placeholder "search" to "Search My Project"

let search = document.querySelector(".search-field input");
search.placeholder = "Search My Project"

//task 3: Manipulating hero section's details

let details = document.querySelector(".hero-left-section p span:last-child");
details.innerText = "iNeuron Intelligence Pvt Ltd"