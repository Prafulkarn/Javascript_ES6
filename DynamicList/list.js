const addBtn = document.getElementById("addbtn");
const removeBtn = document.getElementById("removebtn");
const list = document.getElementById("list");
const addSection = document.getElementById("inputListContainer");
const inputAddBtn = document.getElementById("inputAddbtn");
const addInput = document.getElementById("list-input");

let currentLi = null;

// Show input section
addBtn.addEventListener("click", () => {
    addSection.style.display = "block";
    addInput.value = "";
    addInput.focus();
});

// Add item to list
inputAddBtn.addEventListener("click", () => {
    if (addInput.value.trim() === "") return;

    currentLi = document.createElement("li");
    currentLi.textContent = addInput.value;
    currentLi.classList.add("highlight");

    list.appendChild(currentLi);
    addSection.style.display = "none";
});

// Remove last item
removeBtn.addEventListener("click", () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});
