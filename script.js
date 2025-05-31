const notesContainer = document.querySelector(".notes-container");
const createBtn = document.getElementById('createBtn');
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener('click', function() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "img/25190.jpg";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } 
});