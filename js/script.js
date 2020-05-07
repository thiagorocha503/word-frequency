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
    var old_table = document.getElementById("table-result");
    var new_table = buildTable(result);
    resultContainer.replaceChild(new_table, old_table);
}
function countWord(text) {
    var pattern = RegExp("\\w{1,}", "g");
    var words = text.match(pattern);
    var result = [];
    words.forEach(function (word) {
        var count = 0;
        words.forEach(function (j) {
            if (word == j) {
                count += 1;
            }
        });
        result.push({ "word": word, "count": count });
    });
    // Sort data 
    result.sort(function (a, b) { return a["count"] - b["count"]; });
    return result.reverse();
}
function buildTable(data) {
    var tableContainer = document.createElement("table");
    tableContainer.setAttribute("id", "table-result");
    var tableContent = "\n        <tr>\n            " + ["Word", "Count"].map(function (element) { return ("<th>" + element + "</th>"); }).join("") + "\n        </tr>\n        " + data.map(function (element) { return ("\n           <tr>\n                <td>" + element["word"] + "</td>\n                <td>" + element["count"] + "</td>\n           </tr>\n        "); }).join("") + "          \n    ";
    tableContainer.insertAdjacentHTML("beforeend", tableContent);
    return tableContainer;
}
