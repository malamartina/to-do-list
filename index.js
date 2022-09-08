let addToDoButton = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let toDoList = document.getElementById("toDoContainer");

addToDoButton.addEventListener("click", function(){
  var paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  document.body.appendChild(paragraph);
  paragraph.classList.add("paragraph-styling");
  inputField.value = "";
  paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener("dblclick", function(){
    document.body.removeChild(paragraph);
  })
})
