var textInput = document.getElementById("text-input");
var resultContainer = document.getElementById("result-container");
function onCountWords() {
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
    var lenght = words.length;
    var _loop_1 = function (i) {
        // check if the list result contains the word
        if (result.filter((function (element) { return element["word"] == words[i]; })).length != 0) {
            return "continue";
        }
        // count
        var count = 0;
        for (var j = 0; j < lenght; j++) {
            if (words[i] == words[j]) {
                count += 1;
            }
        }
        result.push({ "word": words[i], "count": count });
    };
    for (var i = 0; i < lenght; i++) {
        _loop_1(i);
    }
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
