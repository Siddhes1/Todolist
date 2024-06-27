const Newtoinput = document.getElementById("totext");
const addBtn = document.getElementById("todobtn");
const tolist = document.getElementById("todolist");
const existingCourses = new Set();

function additem() {
  const test = Newtoinput.value.trim(); // Trim whitespace from input value
  if (test === "") {
    alert("Please enter a course name."); // Show an alert if input is empty
    return; // Exit the function
  }

   if (existingCourses.has(test)) {
    alert("Do not enter duplicate course names.");
    return; // Exit the function
  }
  const listitem = document.createElement("li");
  const compcheckbox = document.createElement("input");
  const tototest = document.createElement("span");
  const deletebutton = document.createElement("button"); // Corrected variable name
  listitem.style.margin = "10px";
  deletebutton.style.backgroundColor = "red";
  deletebutton.style.margin = "0px 20px";
  tototest.style.padding = "10px ";
  tototest.style.margin = "5px";
  tototest.style.fontFamily =
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  compcheckbox.style.padding = "10px";
  compcheckbox.style.width = "15px";
  compcheckbox.style.height = "15px";
  compcheckbox.style.border = "2px solid blue";

  deletebutton.className = "btn btn-danger";

  compcheckbox.type = "checkbox";
  listitem.appendChild(compcheckbox);
  listitem.appendChild(tototest);
  listitem.appendChild(deletebutton);
  tototest.textContent = test;

  deletebutton.textContent = "Delete"; // Corrected variable name
  tolist.appendChild(listitem); // Use appendChild to add the list item

  // Replace with your desired color

  deletebutton.addEventListener("click", function () {
    tolist.removeChild(listitem);
  });
}

if (Newtoinput != null) {
  addBtn.addEventListener("click", additem);
} else {
  alert("Error: Input element not found.");
}
