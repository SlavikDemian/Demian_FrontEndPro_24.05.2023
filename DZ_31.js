


document.getElementById("submitButton").addEventListener("click", function () {
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        birthdate: document.getElementById("birthdate").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        city: document.getElementById("city").value,
        address: document.getElementById("address").value,
        languages: [],
    };

    document.querySelectorAll('input[name="languages"]:checked').forEach(function (checkbox) {
        formData.languages.push(checkbox.value);
    });

    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    table.style.border = "1px solid black";
    const tbody = document.createElement("tbody");

    for (const key in formData) {
        const row = document.createElement("tr");
        const keyCell = document.createElement("td");
        const valueCell = document.createElement("td");

        keyCell.textContent = key;
        keyCell.style.border = "1px solid black";

        valueCell.textContent = Array.isArray(formData[key]) ? formData[key].join(", ") : formData[key];
        valueCell.style.border = "1px solid black";

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);

    document.getElementById("myForm").style.display = "none";
});

