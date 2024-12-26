document.getElementById("addButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const studentId = document.getElementById("student-id").value;
  const studentClass = document.getElementById("class").value;
  const rollNo = document.getElementById("roll-no").value;

  if (name && studentId && studentClass && rollNo) {
    const table = document
      .getElementById("studentTable")
      .querySelector("tbody");
    const row = table.insertRow();

    row.innerHTML = `
            <td>${name}</td>
            <td>${studentId}</td>
            <td>${studentClass}</td>
            <td>${rollNo}</td>
            <td class="action-buttons">
                <button class="reset-btn">Reset</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

    row.querySelector(".reset-btn").addEventListener("click", function () {
      row.cells[0].innerText = "";
      row.cells[1].innerText = "";
      row.cells[2].innerText = "";
      row.cells[3].innerText = "";
    });

    row.querySelector(".delete-btn").addEventListener("click", function () {
      row.remove();
    });

    // Clear form fields
    document.getElementById("studentForm").reset();
  } else {
    alert("Please fill in all fields!");
  }
});
