

/*
document.getElementById("submitButton").addEventListener("click", function () {
    const formData = new FormData(document.getElementById("myForm"));
    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    table.style.border = "1px solid black";
    const tbody = document.createElement("tbody");

    for (const key in data) {
        const row = document.createElement("tr");
        const keyCell = document.createElement("td");
        const valueCell = document.createElement("td");

        keyCell.textContent = key;
        keyCell.style.border = "1px solid black";

        valueCell.textContent = Array.isArray(data[key]) ? data[key].join(", ") : data[key];
        valueCell.style.border = "1px solid black";

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);

    document.getElementById("myForm").style.display = "none";
});
*/