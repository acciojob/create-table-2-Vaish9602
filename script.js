function createTable() {
    const table = document.getElementById("myTable");

    // Clear previous table (important for multiple clicks)
    table.innerHTML = "";

    // Take input
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    // Convert to numbers
    const rows = parseInt(rn);
    const cols = parseInt(cn);

    //  Invalid input (non-numeric)
    if (isNaN(rows) || isNaN(cols)) {
        return;
    }

    //  Invalid input (0 or negative)
    if (rows <= 0 || cols <= 0) {
        alert("Please enter positive numbers greater than 0");
        return;
    }

    //  Create table
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}