var selectedRow = null;

// show Alerts
function showAlert(message, className) {
    const div = document.createElement("div")
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

// clear All fields

function clearFields() {
    document.querySelector("#froll").value = "";
    document.querySelector("#fname").value = "";
    document.querySelector("#floc").value = "";
}

// Add Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values

    const Roll = document.querySelector("#froll").value;
    const Name = document.querySelector("#fname").value;
    const Location = document.querySelector("#floc").value;

    // validate

    if (Roll == "" || Name == "" || Location == "") {
        showAlert("Enter All The Inputs", "danger");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
        <td>${Roll}</td>
        <td>${Name}</td>
        <td>${Location}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>`;
            list.appendChild(row);
            selectedRow = null
            showAlert("Student Added", "success");
        }
        else{
            selectedRow.children[0].textContent = Roll;
            selectedRow.children[1].textContent = Name;
            selectedRow.children[2].textContent = Location;
            selectedRow =null;
            showAlert("Student Info Edited","info");
        }
        clearFields();
    }
});

// Edit data

document.querySelector("#student-list").addEventListener("click",(e) => {
 target = e.target;
 if(target.classList.contains("edit")){
   selectedRow = target.parentElement.parentElement;
   document.querySelector("#froll").value = selectedRow.children[0].textContent;
   document.querySelector("#fname").value = selectedRow.children[1].textContent;
   document.querySelector("#floc").value = selectedRow.children[2].textContent;
 }
})

// Delete Data
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Data Deleted", "danger");
    }
});