var textInput = document.getElementById("text-input");
var resultContainer = document.getElementById("result-container");
function onCount() {
    // clear table
    document.getElementById("table-result").innerHTML = "";
    if (textInput.value == "") {
        alert("Empty text field");
        return;
    }
    var result = countWord(textInput.value);
    console.log("count> " + result);
    renderTable(createTable(result));
}
function countWord(text) {
    var pattern = RegExp("\\w{1,}", "g");
    var words = text.match(pattern);
    var result = [];
    words.forEach(function (i) {
        var count = 0;
        words.forEach(function (j) {
            if (i == j) {
                count += 1;
            }
        });
        result.push({ "word": i, "count": count });
    });
    return result;
}
function createTable(data) {
    var tableContainer = document.createElement("table");
    tableContainer.setAttribute("id", "table-result");
    //  Table header
    var tableHeader = document.createElement("tr");
    var wordHeader = document.createElement("th");
    wordHeader.innerHTML = "Word";
    tableHeader.appendChild(wordHeader);
    var countHeader = document.createElement("th");
    countHeader.innerHTML = "Count";
    tableHeader.appendChild(countHeader);
    tableContainer.appendChild(tableHeader);
    //  Table row
    data.forEach(function (e) {
        var row = document.createElement("tr");
        var word = document.createElement("td");
        word.setAttribute("translate", "no");
        word.innerHTML = e["word"];
        var count = document.createElement("td");
        count.setAttribute("translate", "no");
        count.innerHTML = e["count"];
        row.appendChild(word);
        row.appendChild(count);
        tableContainer.appendChild(row);
    });
    renderTable(tableContainer);
    return tableContainer;
}
function renderTable(new_table) {
    var old_table = document.getElementById("table-result");
    resultContainer.replaceChild(new_table, old_table);
}
